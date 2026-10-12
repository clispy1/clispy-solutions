/* Clispy Solutions — motion layer.
   Pure decoration: the site works fully without this file.
   Off for visitors who ask their device to reduce motion. Cursor effects only on mouse devices. */
(function () {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const root = document.documentElement;
  root.classList.add('motion');
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const nextFrame = fn => requestAnimationFrame(() => requestAnimationFrame(fn));
  const fx = name => root.classList.contains('fx-' + name);
  // With the opening sequence on, the hero waits until the intro panel lifts
  const whenRevealed = fn => {
    if (!root.classList.contains('fx-preload')) { fn(); return; }
    let done = false;
    const go = () => { if (!done) { done = true; fn(); } };
    document.addEventListener('fx:reveal', go, { once: true });
    setTimeout(go, 5000); // never leave the hero hidden if the intro fails
  };

  function once(els, fn, margin) {
    if (!els.length) return;
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { fn(en.target); io.unobserve(en.target); }
    }), { rootMargin: margin || '0px 0px -12% 0px' });
    els.forEach(el => io.observe(el));
  }

  /* ---------- Split headings into words that rise through a mask ---------- */

  function split(el) {
    let i = 0;
    (function walk(node) {
      Array.from(node.childNodes).forEach(n => {
        if (n.nodeType === 1) { walk(n); return; }
        if (n.nodeType !== 3 || !n.textContent.trim()) return;
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.append(part); return; }
          const w = document.createElement('span');
          const inner = document.createElement('span');
          w.className = 'w';
          inner.textContent = part;
          inner.style.setProperty('--i', i++);
          w.append(inner);
          frag.append(w);
        });
        n.replaceWith(frag);
      });
    })(el);
    el.classList.add('split');
  }

  const heroTitle = $('.hero h1, .page-hero h1');
  if (heroTitle) {
    split(heroTitle);
    heroTitle.classList.remove('intro');
    whenRevealed(() => nextFrame(() => heroTitle.classList.add('in')));
  }

  const headings = $$('.head .h2, .about-text .h2, .offer .h2, .final h2');
  headings.forEach(split);
  once(headings, el => el.classList.add('in'));

  /* ---------- Count numbers up ---------- */

  function counter(el) {
    const parts = [];
    const tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    while (tw.nextNode()) {
      const node = tw.currentNode;
      const m = node.textContent.match(/\d[\d,]*/);
      if (!m) continue;
      const value = Number(m[0].replace(/,/g, ''));
      if (value >= 1900 && value <= 2100) continue; // years stay as they are
      parts.push({ node, value, comma: m[0].includes(','), pre: node.textContent.slice(0, m.index), post: node.textContent.slice(m.index + m[0].length) });
    }
    const paint = p => parts.forEach(o => {
      const v = Math.round(o.value * p);
      o.node.textContent = o.pre + (o.comma ? v.toLocaleString('en-US') : v) + o.post;
    });
    if (!parts.length) return () => {};
    paint(0);
    return (delay = 0) => {
      const start = performance.now() + delay;
      const tick = now => {
        const t = clamp((now - start) / 1600, 0, 1);
        paint(t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
  }

  /* ---------- Hero: tracker, KPIs, trend line ---------- */

  const board = $('.hero-board');
  if (board) {
    board.classList.remove('intro');
    whenRevealed(() => setTimeout(() => board.classList.add('in'), 250));

    const track = $('.track', board);
    if (track) {
      $$('li', track).forEach((li, i) => li.style.setProperty('--i', i));
      const pct = counter($('.now .when', track) || track);
      whenRevealed(() => setTimeout(() => { track.classList.add('in'); pct(900); }, 650));
    }
    $$('.kpi-value', board).forEach(el => { const run = counter(el); whenRevealed(() => setTimeout(() => run(), 1000)); });
    $$('.spark', board).forEach(s => whenRevealed(() => setTimeout(() => s.classList.add('in'), 1000)));
  }

  const counters = $$('.kpi-value, .stat b').filter(el => !board || !board.contains(el));
  const runs = new Map(counters.map(el => [el, counter(el)]));
  once(counters, el => runs.get(el)());

  /* ---------- Staggered pieces inside service demos ---------- */

  $$('.service').forEach(card => {
    $$('.mini-row', card).forEach((r, i) => r.style.setProperty('--i', i));
    $$('.bars i', card).forEach((b, i) => b.style.setProperty('--i', i));
  });

  /* ---------- Scroll-linked: progress line, nav, hero tilt, parallax, process ---------- */

  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.append(bar);

  const nav = $('.nav');
  const shots = $$('.case .shot img');
  const inView = new Set();
  const pio = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) inView.add(en.target); else inView.delete(en.target);
  }));
  shots.forEach(img => { img.classList.add('px'); pio.observe(img); });

  const process = $('.process');
  const steps = process ? $$('li', process) : [];

  let lastY = window.scrollY;
  let queued = false;

  function frame() {
    queued = false;
    const y = window.scrollY;
    const vh = window.innerHeight;
    const max = root.scrollHeight - vh;
    bar.style.transform = `scaleX(${max > 0 ? clamp(y / max, 0, 1) : 0})`;

    if (nav) {
      if (y < 140 || y < lastY - 4 || document.body.classList.contains('menu-open')) nav.classList.remove('away');
      else if (y > lastY + 4) nav.classList.add('away');
    }
    lastY = y;

    if (board && !fx('portal') && y < vh * 1.2) {
      const p = clamp(y / (vh * 0.55), 0, 1);
      const angle = (1 - p) * (window.innerWidth < 640 ? 7 : 13);
      board.style.transform = `perspective(1600px) rotateX(${angle.toFixed(2)}deg) scale(${(0.955 + 0.045 * p).toFixed(4)})`;
    }

    inView.forEach(img => {
      const r = img.parentElement.getBoundingClientRect();
      const c = (r.top + r.height / 2 - vh / 2) / vh;
      img.style.translate = `0 ${clamp(-c * 5, -5, 5).toFixed(2)}%`;
    });

    if (process) {
      const r = process.getBoundingClientRect();
      const p = clamp((vh * 0.8 - r.top) / (r.height * 0.9), 0, 1);
      steps.forEach((li, i) => li.classList.toggle('lit', fx('stack') || p > i / steps.length));
    }
  }
  window.addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(frame); } }, { passive: true });
  window.addEventListener('resize', frame);
  frame();

  /* ---------- Mouse only: spotlight borders and magnetic buttons ---------- */

  if (fine) {
    document.addEventListener('pointermove', e => {
      const el = e.target.closest && e.target.closest('.card, .final');
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    }, { passive: true });

    $$('.btn-primary, .btn-light').forEach(btn => {
      btn.classList.add('magnetic');
      btn.addEventListener('pointermove', e => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.2;
        const y = (e.clientY - r.top - r.height / 2) * 0.3;
        btn.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
      });
      btn.addEventListener('pointerleave', () => { btn.style.translate = ''; });
    });
  }
})();
