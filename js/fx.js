/* Clispy Solutions — signature effects (experimental).
   Each effect is switched on by an fx-* class on <html>, set by the small script in <head>.
   Try them live: open the page with #lab at the end of the address.

   preloader  opening sequence (first visit per session)
   smooth     momentum scrolling (desktop)
   portal     hero screenshot zooms to fill the screen
   globe      dotted globe with client locations
   reel       Selected Work scrolls sideways
   stack      process steps stack as cards
   cursor     custom cursor (desktop)
   scramble   labels decode like a departure board */
(function () {
  'use strict';

  const root = document.documentElement;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const on = name => root.classList.contains('fx-' + name);
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  const EFFECTS = [
    ['preloader', 'Opening sequence'],
    ['smooth', 'Smooth scrolling (desktop)'],
    ['portal', 'Scroll into the screen'],
    ['globe', '3D globe'],
    ['reel', 'Horizontal project reel'],
    ['stack', 'Stacking process cards'],
    ['cursor', 'Custom cursor (desktop)'],
    ['scramble', 'Scrambling text']
  ];

  /* ---------- Effects lab: open the page with #lab ---------- */

  (function lab() {
    let show = /lab/.test(location.hash);
    try {
      if (show) localStorage.setItem('clispy.lab', '1');
      show = show || localStorage.getItem('clispy.lab') === '1';
    } catch (e) { /* storage blocked */ }
    if (!show) return;

    let saved = {};
    try { saved = JSON.parse(localStorage.getItem('clispy.fx') || '{}'); } catch (e) {}
    const panel = document.createElement('div');
    panel.className = 'fx-lab';
    panel.setAttribute('data-lenis-prevent', '');
    panel.innerHTML = `
      <div class="fx-lab-head"><b>Effects lab</b><button type="button" class="btn btn-ghost btn-icon" data-lab-min aria-label="Minimise">–</button></div>
      <div class="fx-lab-body">
        ${EFFECTS.map(([k, t]) => `<label class="fx-lab-row"><input type="checkbox" data-fx="${k}"${(k in saved ? saved[k] : 1) ? ' checked' : ''}><span>${t}</span></label>`).join('')}
        <div class="fx-lab-actions">
          <button type="button" class="btn btn-primary btn-sm" data-lab-apply>Apply</button>
          <button type="button" class="btn btn-sm" data-lab-intro>Replay intro</button>
        </div>
        <div class="fx-lab-actions">
          <button type="button" class="btn btn-ghost btn-sm" data-lab-all>All on</button>
          <button type="button" class="btn btn-ghost btn-sm" data-lab-none>All off</button>
          <button type="button" class="btn btn-ghost btn-sm" data-lab-hide>Close lab</button>
        </div>
      </div>`;
    document.body.append(panel);
    const boxes = $$('[data-fx]', panel);
    const save = () => {
      const cfg = {};
      boxes.forEach(b => { cfg[b.dataset.fx] = b.checked ? 1 : 0; });
      try { localStorage.setItem('clispy.fx', JSON.stringify(cfg)); } catch (e) {}
    };
    const reload = () => { location.hash = ''; location.reload(); };
    panel.addEventListener('click', e => {
      const t = e.target.closest('button');
      if (!t) return;
      if (t.matches('[data-lab-apply]')) { save(); reload(); }
      if (t.matches('[data-lab-intro]')) { save(); try { sessionStorage.removeItem('clispy.intro'); } catch (e2) {} window.scrollTo(0, 0); reload(); }
      if (t.matches('[data-lab-all]')) boxes.forEach(b => { b.checked = true; });
      if (t.matches('[data-lab-none]')) boxes.forEach(b => { b.checked = false; });
      if (t.matches('[data-lab-min]')) panel.classList.toggle('min');
      if (t.matches('[data-lab-hide]')) { try { localStorage.removeItem('clispy.lab'); } catch (e2) {} panel.remove(); }
    });
  })();

  if (reduced) return;

  // Effects that need GSAP fall back to the normal layout if it didn't load
  if (!hasGsap) ['portal', 'reel', 'smooth'].forEach(k => root.classList.remove('fx-' + k));
  else {
    gsap.registerPlugin(ScrollTrigger);
    // Phones resize the viewport as the address bar hides; don't recalculate on that
    ScrollTrigger.config({ ignoreMobileResize: true });
  }

  /* ---------- 10. Opening sequence ---------- */

  function reveal() {
    root.classList.remove('fx-preload');
    document.dispatchEvent(new Event('fx:reveal'));
  }

  if (root.classList.contains('fx-preload')) {
    try { sessionStorage.setItem('clispy.intro', '1'); } catch (e) {}
    const pre = document.createElement('div');
    pre.className = 'preloader';
    pre.setAttribute('aria-hidden', 'true');
    pre.innerHTML = `
      <div class="pre-mark"><span>c</span></div>
      <div class="pre-name mono">Clispy Solutions</div>
      <div class="pre-foot mono"><span class="pre-count">000</span><span>Websites that win customers</span></div>
      <div class="pre-line"><i></i></div>`;
    document.body.append(pre);
    const count = $('.pre-count', pre);
    const line = $('.pre-line i', pre);
    const start = performance.now();
    const dur = 1500;
    const tick = now => {
      const t = Math.max(0, Math.min((now - start) / dur, 1));
      const e = 1 - Math.pow(1 - t, 3);
      count.textContent = String(Math.round(e * 100)).padStart(3, '0');
      line.style.transform = `scaleX(${e})`;
      if (t < 1) { requestAnimationFrame(tick); return; }
      const fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
      Promise.race([fonts, new Promise(r => setTimeout(r, 800))]).then(() => {
        pre.classList.add('out');
        setTimeout(reveal, 250);
        setTimeout(() => pre.remove(), 1300);
      });
    };
    requestAnimationFrame(() => pre.classList.add('in'));
    requestAnimationFrame(tick);
  }

  /* ---------- 9. Smooth scrolling (desktop) ---------- */

  let lenis = null;
  if (on('smooth') && fine && typeof window.Lenis === 'function' && hasGsap) {
    lenis = new window.Lenis({ lerp: 0.1, wheelMultiplier: 0.9, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    // In-page links glide too
    document.addEventListener('click', e => {
      const a = e.target.closest('a[href*="#"]');
      if (!a || e.defaultPrevented) return;
      const url = new URL(a.href, location.href);
      if (url.pathname !== location.pathname || !url.hash || url.hash === '#') return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80, duration: 1.4 });
      history.pushState(null, '', url.hash);
    });
    const dlg = $('.dialog-scroll');
    if (dlg) dlg.setAttribute('data-lenis-prevent', '');
  } else {
    root.classList.remove('fx-smooth');
  }

  // Pause smooth scrolling and the custom cursor while the case study is open
  const caseDialog = $('#case-dialog');
  if (caseDialog) {
    new MutationObserver(() => {
      const open = caseDialog.hasAttribute('open');
      if (lenis) { if (open) lenis.stop(); else lenis.start(); }
      root.classList.toggle('dialog-open', open);
    }).observe(caseDialog, { attributes: true, attributeFilter: ['open'] });
  }

  /* ---------- 1. Scroll into the screen ---------- */

  const board = $('.hero-board');
  const browser = board && $('.browser', board);
  if (on('portal') && hasGsap && browser && window.innerWidth > 640) {
    const side = $('.hero-side', board);
    const bar = $('.browser-bar', browser);
    const img = $('img', browser);
    const cap = document.createElement('div');
    cap.className = 'portal-cap';
    // Move the client strip onto the sheet that slides over the zoomed screenshot
    const strip = $('.hero .clients');
    const rest = $('.rest');
    if (strip && rest) {
      const wrap = document.createElement('div');
      wrap.className = 'container clients-wrap';
      wrap.append(strip);
      rest.prepend(wrap);
    }
    cap.innerHTML = '<span class="mono">Denayo Properties · Accra</span><b>Lead generation up 150% after launch.</b>';
    board.append(cap);

    // Scale and shift so the screenshot (not the frame) covers the viewport
    const fit = () => {
      const w = browser.offsetWidth, h = browser.offsetHeight;
      const iw = img.offsetWidth, ih = img.offsetHeight;
      const dx = img.offsetLeft + iw / 2 - w / 2;
      const dy = img.offsetTop + ih / 2 - h / 2;
      const s = Math.max(window.innerWidth / iw, window.innerHeight / ih) * 1.01;
      const cx = board.getBoundingClientRect().left + browser.offsetLeft + w / 2;
      return { s, x: window.innerWidth / 2 - cx - dx * s, y: -dy * s };
    };
    // Caption sits at the bottom-left of the screen while the board is pinned
    const placeCap = () => {
      const boardTop = window.innerHeight / 2 - (browser.offsetTop + browser.offsetHeight / 2);
      cap.style.top = `${window.innerHeight * 0.74 - boardTop - cap.offsetHeight}px`;
    };
    ScrollTrigger.addEventListener('refreshInit', placeCap);
    placeCap();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: browser,
        start: 'center center',
        end: '+=150%',
        pin: board,
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });
    tl.to(side, { opacity: 0, y: 60, duration: 0.3, ease: 'power1.in' }, 0)
      .to(bar, { opacity: 0, duration: 0.15 }, 0.1)
      .to(browser, { scale: () => fit().s, x: () => fit().x, y: () => fit().y, borderRadius: 0, duration: 1, ease: 'power2.inOut' }, 0)
      .to(img, { borderRadius: 0, duration: 1, ease: 'power2.inOut' }, 0)
      .fromTo(cap, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, 0.9)
      .to({}, { duration: 0.35 });
  } else {
    root.classList.remove('fx-portal');
  }

  /* ---------- 6. Horizontal project reel ---------- */

  const workSection = $('#work');
  const reel = workSection && $('.bento', workSection);
  if (on('reel') && hasGsap && reel) {
    reel.classList.add('reel');
    const end = document.createElement('a');
    end.className = 'card reel-end';
    end.href = 'work.html';
    end.innerHTML = '<span class="mono muted">12 projects</span><b>See all our work</b><span class="reel-arrow" aria-hidden="true">→</span>';
    reel.append(end);
    const cards = $$(':scope > *', reel);
    const wrap = $('.container', workSection);
    const distance = () => Math.max(0, reel.scrollWidth - wrap.clientWidth);
    const focus = () => {
      const mid = window.innerWidth / 2;
      cards.forEach(c => {
        const r = c.getBoundingClientRect();
        const d = Math.min(Math.abs(r.left + r.width / 2 - mid) / window.innerWidth, 1);
        c.style.scale = (1 - d * 0.1).toFixed(3);
      });
    };
    gsap.to(reel, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: workSection,
        start: 'top top',
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 0.7,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: focus
      }
    });
    focus();
  } else {
    root.classList.remove('fx-reel');
  }

  /* ---------- 7. Stacking process cards ---------- */

  const steps = $$('.process li');
  if (on('stack') && steps.length) {
    steps.forEach((li, i) => li.style.setProperty('--i', i));
    if (hasGsap) {
      steps.forEach((li, i) => {
        const next = steps[i + 1];
        if (!next) return;
        const topOf = k => (window.innerWidth <= 640 ? 80 + k * 12 : 96 + k * 16);
        gsap.to(li, {
          scale: 0.94,
          filter: 'brightness(0.86)',
          ease: 'none',
          scrollTrigger: {
            trigger: next,
            start: () => `top ${topOf(i) + li.offsetHeight}px`,
            end: () => `top ${topOf(i + 1)}px`,
            scrub: true,
            invalidateOnRefresh: true
          }
        });
      });
    }
  } else {
    root.classList.remove('fx-stack');
  }

  /* ---------- 3. Globe ---------- */

  const globeCanvas = $('[data-globe]');
  if (on('globe') && globeCanvas) globe(globeCanvas);
  else root.classList.remove('fx-globe');

  function globe(canvas) {
    const ctx = canvas.getContext('2d');
    const rad = d => d * Math.PI / 180;
    const PLACES = [
      { name: 'Accra', lat: 5.6, lon: -0.19, home: true },
      { name: 'British Columbia', lat: 49.28, lon: -123.12 },
      { name: 'UAE', lat: 25.2, lon: 55.27 }
    ];
    const toVec = (lat, lon) => [Math.cos(rad(lat)) * Math.sin(rad(lon)), Math.sin(rad(lat)), Math.cos(rad(lat)) * Math.cos(rad(lon))];
    let dots = [];
    let W = 0, H = 0, R = 0, dpr = 1;
    let rot = rad(20);         // spin around the axis
    const tilt = rad(-14);     // lean towards the viewer
    let vel = 0, dragging = false, lastX = 0, visible = false, colors = null, t0 = performance.now();

    // Evenly spread points; keep land points using a public land/water map (falls back to all points)
    const N = 16000;
    const golden = Math.PI * (3 - Math.sqrt(5));
    const all = [];
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = golden * i;
      all.push([Math.cos(th) * r, y, Math.sin(th) * r]);
    }
    dots = all.filter((_, i) => i % 5 === 0);

    const map = new Image();
    map.crossOrigin = 'anonymous';
    map.onload = () => {
      try {
        const c = document.createElement('canvas');
        c.width = 720; c.height = 360;
        const m = c.getContext('2d');
        m.drawImage(map, 0, 0, c.width, c.height);
        const px = m.getImageData(0, 0, c.width, c.height).data;
        const bright = (x, y) => px[(y * c.width + x) * 4];
        let lightCount = 0;
        for (let i = 0; i < px.length; i += 16) if (px[i] > 128) lightCount++;
        const lightIsWater = lightCount / (px.length / 16) > 0.5;
        dots = all.filter(([x, y, z]) => {
          const lat = Math.asin(y) * 180 / Math.PI;
          const lon = Math.atan2(x, z) * 180 / Math.PI;
          const mx = Math.min(c.width - 1, Math.floor((lon + 180) / 360 * c.width));
          const my = Math.min(c.height - 1, Math.floor((90 - lat) / 180 * c.height));
          const light = bright(mx, my) > 128;
          return lightIsWater ? !light : light;
        });
      } catch (e) { /* keep the abstract sphere */ }
    };
    map.src = 'https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-water.png';

    function readColors() {
      const cs = getComputedStyle(root);
      colors = { accent: cs.getPropertyValue('--accent').trim() || '#8f6bff', text: cs.getPropertyValue('--text').trim() || '#fff', dim: cs.getPropertyValue('--text-3').trim() || '#888' };
    }
    function size() {
      const r = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = r.width; H = r.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      R = Math.min(W * 0.4, H * 0.38);
      readColors();
    }
    function project(v, lift) {
      const [x0, y0, z0] = v;
      const cr = Math.cos(rot), sr = Math.sin(rot);
      const x1 = x0 * cr + z0 * sr;
      const z1 = -x0 * sr + z0 * cr;
      const ct = Math.cos(tilt), st = Math.sin(tilt);
      const y2 = y0 * ct - z1 * st;
      const z2 = y0 * st + z1 * ct;
      const k = lift || 1;
      return { x: W / 2 + x1 * R * k, y: H * 0.54 - y2 * R * k, z: z2, rim: (x1 * x1 + y2 * y2) * k * k > 1 };
    }
    function arcPoints(a, b, n) {
      const A = toVec(a.lat, a.lon), B = toVec(b.lat, b.lon);
      const dot = Math.max(-1, Math.min(1, A[0] * B[0] + A[1] * B[1] + A[2] * B[2]));
      const om = Math.acos(dot), so = Math.sin(om);
      const pts = [];
      for (let i = 0; i <= n; i++) {
        const t = i / n;
        const f1 = Math.sin((1 - t) * om) / so, f2 = Math.sin(t * om) / so;
        pts.push({ v: [A[0] * f1 + B[0] * f2, A[1] * f1 + B[1] * f2, A[2] * f1 + B[2] * f2], lift: 1 + Math.sin(Math.PI * t) * 0.28 });
      }
      return pts;
    }
    const arcs = [arcPoints(PLACES[0], PLACES[1], 90), arcPoints(PLACES[0], PLACES[2], 70)];

    function draw(now) {
      if (!visible) return;
      requestAnimationFrame(draw);
      const time = (now - t0) / 1000;
      if (!dragging) { vel *= 0.95; rot += 0.0022 + vel; } else rot += vel;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      // soft halo
      const g = ctx.createRadialGradient(W / 2, H * 0.54, R * 0.6, W / 2, H * 0.54, R * 1.35);
      g.addColorStop(0, 'transparent');
      g.addColorStop(0.45, colors.accent + '22');
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      // land dots
      ctx.fillStyle = colors.text;
      for (let i = 0; i < dots.length; i++) {
        const p = project(dots[i]);
        if (p.z <= 0) continue;
        ctx.globalAlpha = 0.12 + p.z * 0.55;
        const s = 1 + p.z * 0.9;
        ctx.fillRect(p.x - s / 2, p.y - s / 2, s, s);
      }
      ctx.globalAlpha = 1;

      // arcs with a travelling spark
      arcs.forEach((pts, ai) => {
        const proj = pts.map(p => project(p.v, p.lift));
        ctx.lineWidth = 1.4;
        ctx.strokeStyle = colors.accent;
        ctx.beginPath();
        let pen = false;
        proj.forEach(p => {
          const show = p.z > 0 || p.rim;
          if (show && !pen) { ctx.moveTo(p.x, p.y); pen = true; } else if (show) ctx.lineTo(p.x, p.y); else pen = false;
        });
        ctx.globalAlpha = 0.75;
        ctx.stroke();
        ctx.globalAlpha = 1;
        const head = Math.floor((((time * 0.35) + ai * 0.5) % 1) * (proj.length - 1));
        const hp = proj[head];
        if (hp.z > 0 || hp.rim) {
          ctx.fillStyle = '#fff';
          ctx.shadowColor = colors.accent;
          ctx.shadowBlur = 12;
          ctx.beginPath(); ctx.arc(hp.x, hp.y, 2.6, 0, Math.PI * 2); ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // pins
      PLACES.forEach((pl, i) => {
        const p = project(toVec(pl.lat, pl.lon));
        if (p.z <= 0.05) return;
        const pulse = (time * 0.8 + i * 0.33) % 1;
        ctx.strokeStyle = colors.accent;
        ctx.globalAlpha = (1 - pulse) * p.z;
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(p.x, p.y, 4 + pulse * 16, 0, Math.PI * 2); ctx.stroke();
        ctx.globalAlpha = p.z;
        ctx.fillStyle = colors.accent;
        ctx.beginPath(); ctx.arc(p.x, p.y, pl.home ? 4.5 : 3.5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = colors.text;
        ctx.font = '500 11.5px "Geist Mono", ui-monospace, monospace';
        ctx.fillText(pl.name.toUpperCase(), p.x + 10, p.y - 8);
        ctx.globalAlpha = 1;
      });
    }

    // drag to spin
    canvas.addEventListener('pointerdown', e => { dragging = true; lastX = e.clientX; vel = 0; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener('pointermove', e => { if (!dragging) return; vel = (e.clientX - lastX) * 0.005; lastX = e.clientX; });
    const stop = () => { dragging = false; };
    canvas.addEventListener('pointerup', stop);
    canvas.addEventListener('pointercancel', stop);

    size();
    window.addEventListener('resize', size);
    new MutationObserver(readColors).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    new IntersectionObserver(([en]) => {
      const was = visible;
      visible = en.isIntersecting;
      if (visible && !was) { size(); requestAnimationFrame(draw); }
    }).observe(canvas);
  }

  /* ---------- 12. Custom cursor (desktop) ---------- */

  if (on('cursor') && fine) {
    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.className = 'cursor-dot';
    ring.className = 'cursor-ring';
    ring.innerHTML = '<span>View</span>';
    document.body.append(dot, ring);
    root.classList.add('has-cursor');
    let x = -100, y = -100, rx = -100, ry = -100;
    document.addEventListener('pointermove', e => {
      x = e.clientX; y = e.clientY;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      const t = e.target;
      const onCase = t.closest && t.closest('.case, .reel-end');
      const onLink = !onCase && t.closest && t.closest('a, button, summary, label, [role="button"], .filter, canvas');
      const onText = t.closest && t.closest('input, textarea, select');
      ring.classList.toggle('view', !!onCase);
      ring.classList.toggle('link', !!onLink);
      root.classList.toggle('cursor-hidden', !!onText);
    }, { passive: true });
    document.addEventListener('pointerdown', () => ring.classList.add('down'));
    document.addEventListener('pointerup', () => ring.classList.remove('down'));
    document.documentElement.addEventListener('mouseleave', () => root.classList.add('cursor-hidden'));
    document.documentElement.addEventListener('mouseenter', () => root.classList.remove('cursor-hidden'));
    (function follow() {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      requestAnimationFrame(follow);
    })();
  } else {
    root.classList.remove('fx-cursor');
  }

  /* ---------- 13. Scrambling text ---------- */

  if (on('scramble')) {
    const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=/<>';
    const scramble = (el, dur) => {
      const nodes = [];
      const tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      while (tw.nextNode()) if (tw.currentNode.textContent.trim()) nodes.push(tw.currentNode);
      nodes.forEach(n => { if (n.__final == null) n.__final = n.textContent; });
      const start = performance.now();
      const step = now => {
        const p = Math.min((now - start) / dur, 1);
        nodes.forEach(n => {
          const f = n.__final;
          let out = '';
          for (let i = 0; i < f.length; i++) {
            const ch = f[i];
            out += ch === ' ' || i / f.length < p ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0];
          }
          n.textContent = out;
        });
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const targets = $$('.label, .case-meta > span, .browser-bar span, .footer h4, .clients-label, .times b, .kicker');
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      setTimeout(() => scramble(en.target, 650 + Math.min(en.target.textContent.length, 40) * 12), 120);
    }), { rootMargin: '0px 0px -10% 0px' });
    const watch = () => targets.forEach(t => io.observe(t));
    if (root.classList.contains('fx-preload')) document.addEventListener('fx:reveal', watch, { once: true });
    else watch();
    if (fine) $$('.nav-links a, .footer ul a').forEach(a => a.addEventListener('mouseenter', () => scramble(a, 420)));
  }

  if (hasGsap) {
    window.addEventListener('load', () => ScrollTrigger.refresh());
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
})();
