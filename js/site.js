/* Clispy Solutions — site behaviour (no dependencies) */
(function () {
  'use strict';

  const WHATSAPP = '233206601059';
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  document.documentElement.classList.remove('no-js');

  /* ---------- Navigation ---------- */

  const nav = $('.nav');
  const onScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const menuBtn = $('.menu-btn');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
  }
  if (menuBtn) menuBtn.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  $$('.mobile-menu a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  document.addEventListener('click', e => {
    if (document.body.classList.contains('menu-open') && !e.target.closest('.mobile-menu, .menu-btn')) setMenu(false);
  });

  /* ---------- Light / dark mode (follows the device until changed) ---------- */

  const root = document.documentElement;
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : systemDark.matches;
  $$('[data-theme-toggle]').forEach(btn => btn.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('clispy.theme', next); } catch (e) { /* storage blocked */ }
  }));

  /* ---------- Mobile action bar: hidden over the form and footer ---------- */

  const mbar = $('[data-mbar]');
  const hideOver = $$('#contact, .footer');
  if (mbar && hideOver.length && 'IntersectionObserver' in window) {
    const visible = new Set();
    const mo = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) visible.add(en.target); else visible.delete(en.target); });
      mbar.classList.toggle('hide', visible.size > 0);
    });
    hideOver.forEach(el => mo.observe(el));
  }

  /* ---------- Reveal on scroll ---------- */

  const revealEls = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- Footer year ---------- */

  $$('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  /* ---------- Contact form ---------- */

  let applyIntent = () => {};
  const form = $('#contact-form');
  if (form) {
    const intentInputs = $$('input[name="intent"]', form);
    const syncIntent = () => {
      const intent = (intentInputs.find(i => i.checked) || {}).value;
      $$('[data-show-for]', form).forEach(el => {
        const show = el.dataset.showFor.split(' ').includes(intent);
        el.hidden = !show;
        $$('input, select, textarea', el).forEach(f => { f.disabled = !show; });
      });
      const btn = $('[data-submit-label]', form);
      if (btn) btn.textContent = intent === 'review' ? 'Get my free review' : 'Send my project details';
    };
    intentInputs.forEach(i => i.addEventListener('change', syncIntent));
    applyIntent = (intent, plan) => {
      const input = intentInputs.find(i => i.value === intent);
      if (input) { input.checked = true; syncIntent(); }
      if (plan && form.elements.package) form.elements.package.value = plan;
    };

    // "Get a free review" / "Start a project" links preselect the right tab
    document.addEventListener('click', e => {
      const link = e.target.closest('[data-intent]');
      if (!link) return;
      const input = intentInputs.find(i => i.value === link.dataset.intent);
      if (input) { input.checked = true; syncIntent(); }
      const plan = link.dataset.plan;
      if (plan && form.elements.package) form.elements.package.value = plan;
    });
    syncIntent();

    const showError = (field, msg) => {
      const err = document.getElementById(field.id + '-error');
      field.setAttribute('aria-invalid', msg ? 'true' : 'false');
      if (err) { err.hidden = !msg; err.textContent = msg || ''; }
    };

    function validate() {
      let first = null;
      $$('[required]', form).forEach(f => {
        if (f.disabled) return;
        let msg = '';
        const v = f.value.trim();
        if (!v) msg = f.dataset.msg || 'Please fill this in.';
        else if (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) msg = 'That email doesn’t look right.';
        showError(f, msg);
        if (msg && !first) first = f;
      });
      if (first) first.focus();
      return !first;
    }

    $$('input, select, textarea', form).forEach(f => f.addEventListener('input', () => {
      if (f.getAttribute('aria-invalid') === 'true') showError(f, '');
    }));

    function summary() {
      const d = new FormData(form);
      const intent = d.get('intent') === 'review' ? 'a free website review' : 'a new project';
      const lines = [`Hi Jake, I'd like ${intent}.`];
      const add = (label, key) => { const v = (d.get(key) || '').toString().trim(); if (v) lines.push(`${label}: ${v}`); };
      add('Name', 'name');
      add('Business', 'business');
      add('Website', 'website');
      add('Main goal', 'goal');
      add('Service', 'service');
      add('Package', 'package');
      add('Email', 'email');
      add('Details', 'message');
      return lines.join('\n');
    }

    // Opens WhatsApp with everything filled in. Works without any server.
    const waBtn = $('[data-send-whatsapp]', form);
    if (waBtn) waBtn.addEventListener('click', () => {
      if (!validate()) return;
      window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(summary())}`, '_blank', 'noopener');
    });

    form.addEventListener('submit', e => {
      if (!validate()) { e.preventDefault(); return; }
      // To receive submissions by email, set the form's action to a form service
      // (for example Formspree or Netlify Forms) and remove this preventDefault.
      if (!form.getAttribute('action') || form.getAttribute('action') === '#') {
        e.preventDefault();
        const name = (form.elements.name.value || '').trim().split(' ')[0];
        $('#form-fields').hidden = true;
        const ok = $('#form-success');
        ok.hidden = false;
        $('[data-success-name]', ok).textContent = name || 'there';
        ok.focus();
      }
    });

    const again = $('[data-form-reset]');
    if (again) again.addEventListener('click', () => {
      form.reset();
      syncIntent();
      $('#form-success').hidden = true;
      $('#form-fields').hidden = false;
    });
  }

  const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ease = 'cubic-bezier(0.2, 0.8, 0.2, 1)';

  /* ---------- Modals: contact form and pricing ---------- */

  const modals = {};
  $$('dialog[data-modal]').forEach(d => { modals[d.dataset.modal] = d; });
  const keep = (k, v) => { try { if (v == null) sessionStorage.removeItem(k); else sessionStorage.setItem(k, v); } catch (e) { /* storage blocked */ } };
  const recall = k => { try { return sessionStorage.getItem(k); } catch (e) { return null; } };

  function openModal(name) {
    const d = modals[name];
    if (!d) return false;
    $$('dialog[open]').forEach(o => { if (o !== d) o.close(); });
    if (!d.open) { if (typeof d.showModal === 'function') d.showModal(); else d.setAttribute('open', ''); }
    const sc = $('.dialog-scroll', d);
    if (sc) sc.scrollTop = 0;
    return true;
  }

  function closeModal(d) {
    if (!d.open || d.classList.contains('closing')) return;
    if (calm) { d.close(); return; }
    d.classList.add('closing');
    const finish = () => { d.classList.remove('closing'); d.close(); };
    const onEnd = e => { if (e.target !== d) return; d.removeEventListener('animationend', onEnd); finish(); };
    d.addEventListener('animationend', onEnd);
    setTimeout(() => { if (d.classList.contains('closing')) { d.removeEventListener('animationend', onEnd); finish(); } }, 450);
  }

  Object.keys(modals).forEach(key => {
    const d = modals[key];
    d.addEventListener('click', e => { if (e.target === d || e.target.closest('[data-dialog-close]')) closeModal(d); });
    d.addEventListener('cancel', e => { e.preventDefault(); closeModal(d); });
    d.addEventListener('close', () => {
      if (/^#(contact|pricing)$/.test(location.hash)) history.replaceState(null, '', location.pathname + location.search);
    });
  });

  // Any link or button that points at #contact or #pricing opens the matching modal.
  // On pages without the modal, the choice is remembered and the link goes to the home page.
  document.addEventListener('click', e => {
    const el = e.target.closest('a[href], [data-open-modal]');
    if (!el || e.defaultPrevented) return;
    let name = el.dataset.openModal;
    if (!name) {
      const href = el.getAttribute('href') || '';
      const at = href.indexOf('#');
      if (at === -1) return;
      const page = href.slice(0, at);
      if (page && page !== 'index.html' && page !== location.pathname.split('/').pop()) return;
      const hash = href.slice(at);
      name = hash === '#contact' ? 'contact' : hash === '#pricing' ? 'pricing' : '';
      if (!name) return;
    }
    if (name === 'contact' && !modals.contact) { keep('clispy.intent', el.dataset.intent || null); keep('clispy.plan', el.dataset.plan || null); return; }
    if (!modals[name]) return;
    e.preventDefault();
    openModal(name);
  });

  // Arriving on the home page with #contact or #pricing in the address opens the modal
  function openFromHash() {
    const name = location.hash === '#contact' ? 'contact' : location.hash === '#pricing' ? 'pricing' : '';
    if (!name || !modals[name]) return;
    if (name === 'contact') {
      applyIntent(recall('clispy.intent'), recall('clispy.plan'));
      keep('clispy.intent', null); keep('clispy.plan', null);
    }
    const go = () => openModal(name);
    if (!root.classList.contains('fx-preload')) { go(); return; }
    const wait = setInterval(() => { if (!root.classList.contains('fx-preload')) { clearInterval(wait); go(); } }, 200);
  }
  openFromHash();
  window.addEventListener('hashchange', openFromHash);

  /* ---------- FAQ: answers open and close smoothly ---------- */

  $$('.faq-item').forEach(item => {
    const summary = $('summary', item);
    const answer = $('.answer', item);
    if (!summary || !answer) return;
    let run = null;
    summary.addEventListener('click', e => {
      if (calm || !('animate' in Element.prototype)) return;
      e.preventDefault();
      const startH = run ? answer.getBoundingClientRect().height : null;
      if (run) { run.onfinish = null; run.cancel(); run = null; }
      const opening = !(item.open && !item.classList.contains('is-closing'));
      item.classList.toggle('is-closing', !opening);
      if (opening) item.open = true;
      const pad = getComputedStyle(answer).paddingBottom;
      const full = answer.offsetHeight;
      const from = startH != null ? startH : (opening ? 0 : full);
      const to = opening ? full : 0;
      const frame = h => ({ height: h + 'px', paddingBottom: h ? pad : '0px', opacity: h ? 1 : 0 });
      answer.style.overflow = 'hidden';
      run = answer.animate([frame(from), frame(to)], { duration: opening ? 220 : 170, easing: 'cubic-bezier(0.32, 0.72, 0, 1)', fill: 'forwards' });
      const anim = run;
      anim.onfinish = () => {
        if (!opening) { item.open = false; item.classList.remove('is-closing'); }
        anim.cancel();
        answer.style.overflow = '';
        if (run === anim) run = null;
      };
    });
  });

  /* ---------- Work page: filters (cards glide to their new places) ---------- */

  const filters = $$('.filter');
  if (filters.length) {
    const cards = $$('.case[data-cats]');
    filters.forEach(btn => btn.addEventListener('click', () => {
      const cat = btn.dataset.filter;
      filters.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
      const glide = !calm && 'animate' in Element.prototype;
      const before = new Map();
      if (glide) cards.forEach(c => { if (!c.hidden) before.set(c, c.getBoundingClientRect()); });
      cards.forEach(c => { c.hidden = cat !== 'all' && !c.dataset.cats.split(' ').includes(cat); });
      if (!glide) return;
      cards.forEach(c => {
        if (c.hidden) return;
        c.classList.add('in');
        const a = before.get(c);
        const b = c.getBoundingClientRect();
        if (a) {
          const dx = a.left - b.left, dy = a.top - b.top;
          if (dx || dy) c.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'none' }], { duration: 600, easing: ease });
        } else {
          c.animate([{ opacity: 0, transform: 'scale(0.96)' }, { opacity: 1, transform: 'none' }], { duration: 500, easing: ease });
        }
      });
    }));
  }

  /* ---------- Case study popup (the screenshot grows into it where supported) ---------- */

  const dialog = $('#case-dialog');
  if (dialog) {
    const body = $('[data-dialog-body]', dialog);
    const top = $('[data-dialog-top]', dialog);
    const morph = !calm && typeof document.startViewTransition === 'function';
    let fromImg = null;
    if (morph) dialog.classList.add('vt');

    const fill = card => {
      top.innerHTML = $('.case-visual', card).innerHTML;
      const img = $('img', top);
      if (img) { img.className = ''; img.removeAttribute('style'); img.loading = 'eager'; }
      body.innerHTML = $('.case-details', card).innerHTML;
      dialog.setAttribute('aria-label', card.dataset.name || 'Case study');
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
      $('.dialog-scroll', dialog).scrollTop = 0;
    };
    const name = (el, v) => { if (el) el.style.viewTransitionName = v; };

    $$('.case[data-case]').forEach(card => card.addEventListener('click', e => {
      if (e.target.closest('a')) return;
      if (!morph) { fill(card); return; }
      fromImg = $('.shot img', card);
      name(fromImg, 'case-shot');
      document.startViewTransition(() => {
        name(fromImg, '');
        fill(card);
        name($('img', top), 'case-shot');
      });
    }));

    function close(animate) {
      if (!dialog.open) return;
      const toImg = $('img', top);
      if (!animate || !morph || !fromImg || !fromImg.isConnected) { name(toImg, ''); dialog.close(); return; }
      const vt = document.startViewTransition(() => {
        name(toImg, '');
        dialog.close();
        name(fromImg, 'case-shot');
      });
      vt.finished.finally(() => name(fromImg, ''));
    }

    // Close on the X, on the backdrop or with Esc; links marked data-dialog-close close instantly
    dialog.addEventListener('click', e => {
      const link = e.target.closest('a[data-dialog-close]');
      if (link) { close(false); return; }
      if (e.target === dialog || e.target.closest('[data-dialog-close]')) close(true);
    });
    dialog.addEventListener('cancel', e => { e.preventDefault(); close(true); });
  }
})();
