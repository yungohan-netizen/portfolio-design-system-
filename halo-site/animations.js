/* Halo Studio — animation engine.
   Vanilla JS, no React deps. Loaded once after the kit mounts.

   Three primitives:
   1. Scroll reveal — anything with [data-reveal] fades up when 15% visible.
      Optional [data-reveal-delay="120"] (ms) and [data-reveal-stagger]
      (cascades children by 80ms).
   2. Magnetic — anything with [data-magnetic] follows cursor within
      its bounds. Strength via [data-magnetic-strength="0.3"] default.
   3. Custom cursor — a faint ring that grows + glows over interactive
      elements ([data-magnetic], a, button, .work-tile).
*/

(function () {
  if (typeof window === 'undefined') return;
  if (window.__haloAnimsInit) return;
  window.__haloAnimsInit = true;

  // ---- Wait for React to mount ----
  function ready(fn) {
    if (document.readyState !== 'loading') setTimeout(fn, 80);
    else document.addEventListener('DOMContentLoaded', () => setTimeout(fn, 80));
  }

  // ---- Re-scan on DOM mutation so React-added nodes get wired up ----
  function observeMutations(rescan) {
    const obs = new MutationObserver(() => {
      clearTimeout(window.__haloAnimsScan);
      window.__haloAnimsScan = setTimeout(rescan, 30);
    });
    obs.observe(document.body, { childList: true, subtree: true });
  }

  // -------------- 1. SCROLL REVEAL --------------
  function initReveal() {
    function trigger(el) {
      const delay = parseInt(el.dataset.revealDelay || '0', 10);
      setTimeout(() => el.classList.add('is-in'), delay);
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        trigger(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -2% 0px' });

    function inViewport(el) {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const vw = window.innerWidth || document.documentElement.clientWidth;
      // Visible if any part is in viewport (with small bottom margin)
      return r.top < vh * 0.98 && r.bottom > 0 && r.left < vw && r.right > 0;
    }

    function scan() {
      document.querySelectorAll('[data-reveal]:not([data-reveal-wired])').forEach((el) => {
        el.setAttribute('data-reveal-wired', '');
        // Stagger children automatically
        if (el.hasAttribute('data-reveal-stagger')) {
          [...el.children].forEach((c, i) => {
            c.style.transitionDelay = `${i * 80}ms`;
            c.classList.add('reveal-item');
          });
        }
        // If already in viewport, trigger immediately (next frame for transition)
        if (inViewport(el)) {
          requestAnimationFrame(() => trigger(el));
        } else {
          io.observe(el);
        }
      });
    }
    scan();
    return scan;
  }

  // -------------- 2. MAGNETIC HOVER --------------
  function initMagnetic() {
    function scan() {
      document.querySelectorAll('[data-magnetic]:not([data-magnetic-wired])').forEach((el) => {
        el.setAttribute('data-magnetic-wired', '');
        const strength = parseFloat(el.dataset.magneticStrength || '0.3');
        let raf;
        function onMove(e) {
          const r = el.getBoundingClientRect();
          const x = e.clientX - (r.left + r.width / 2);
          const y = e.clientY - (r.top + r.height / 2);
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => {
            el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
          });
        }
        function reset() {
          cancelAnimationFrame(raf);
          el.style.transform = '';
        }
        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', reset);
      });
    }
    scan();
    return scan;
  }

  // -------------- 3. CUSTOM CURSOR --------------
  function initCursor() {
    if (window.matchMedia('(pointer: coarse)').matches) return () => {};

    const ring = document.createElement('div');
    ring.className = 'halo-cursor';
    ring.innerHTML = '<span class="halo-cursor-dot"></span><span class="halo-cursor-ring"></span>';
    document.body.appendChild(ring);

    let tx = -100, ty = -100, x = -100, y = -100;
    let active = false;
    document.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
    document.addEventListener('mouseenter', () => { active = true; ring.classList.add('is-visible'); });
    document.addEventListener('mouseleave', () => { active = false; ring.classList.remove('is-visible'); });

    document.addEventListener('mousedown', () => ring.classList.add('is-down'));
    document.addEventListener('mouseup',   () => ring.classList.remove('is-down'));

    const HOVER_SEL = 'a, button, [data-magnetic], .work-tile, .award-row, .faq-item';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest && e.target.closest(HOVER_SEL)) ring.classList.add('is-hover');
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest && e.target.closest(HOVER_SEL)) ring.classList.remove('is-hover');
    });

    function loop() {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      ring.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      requestAnimationFrame(loop);
    }
    loop();
    return () => {};
  }

  // -------------- 4. SCROLL PARALLAX --------------
  function initParallax() {
    const root = document.querySelector('.site-scroll') || window;
    function scan() {
      const nodes = [...document.querySelectorAll('[data-parallax]')];
      function onScroll() {
        const top = root === window ? window.scrollY : root.scrollTop;
        nodes.forEach((el) => {
          const speed = parseFloat(el.dataset.parallax || '0.2');
          const r = el.getBoundingClientRect();
          const offset = (r.top + (root === window ? 0 : root.getBoundingClientRect().top) - window.innerHeight / 2) * -speed;
          el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
        });
      }
      (root === window ? window : root).addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
    scan();
    return scan;
  }

  // -------------- 5. COUNT-UP --------------
  function initCounters() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.dataset.count || '0');
        const dur = parseInt(el.dataset.countDur || '1800', 10);
        const prefix = el.dataset.countPrefix || '';
        const suffix = el.dataset.countSuffix || '';
        const decimals = parseInt(el.dataset.countDecimals || '0', 10);
        const start = performance.now();
        function tick(now) {
          const t = Math.min(1, (now - start) / dur);
          const ease = 1 - Math.pow(1 - t, 4);
          const val = target * ease;
          el.textContent = prefix + val.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + suffix;
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    }, { threshold: 0.4 });

    function scan() {
      document.querySelectorAll('[data-count]:not([data-count-wired])').forEach((el) => {
        el.setAttribute('data-count-wired', '');
        el.textContent = (el.dataset.countPrefix || '') + '0' + (el.dataset.countSuffix || '');
        io.observe(el);
      });
    }
    scan();
    return scan;
  }

  // -------------- BOOT --------------
  // Mark <html> immediately so CSS can conditionally hide reveal items
  // only when JS is guaranteed to run.
  document.documentElement.classList.add('js-anims');

  ready(() => {
    const scanReveal   = initReveal();
    const scanMagnet   = initMagnetic();
    const scanParallax = initParallax();
    const scanCount    = initCounters();
    initCursor();
    observeMutations(() => {
      scanReveal(); scanMagnet(); scanParallax(); scanCount();
    });

    // SAFETY NET — after 3.5s, force-reveal anything that hasn't fired
    // (e.g. element was offscreen at scan or IO never fired for it).
    setTimeout(() => {
      document.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => {
        el.classList.add('is-in');
      });
    }, 3500);
  });
})();
