// plugdata.org — tiny vanilla JS for OS detection, mobile nav, and active-nav highlight.

function spawnPatchCarousel() {
  // Featured highlights — each entry's `image` is the thumbnail filename
  // (without extension) and `title` identifies the matching patch in store.json.
  const FEATURED = [
    { image: 'curvecomp',  title: 'N-CURVE COMP' },
    { image: 'holo106',    title: 'HOLO-106 Lite' }
  ];

  const grid          = document.querySelector('[data-store-grid]');
  const gridState     = document.querySelector('[data-grid-state]');
  const carouselSec   = document.querySelector('[data-carousel-section]');
  const track         = document.querySelector('[data-carousel-track]');
  const prevBtn       = document.querySelector('[data-carousel-prev]');
  const nextBtn       = document.querySelector('[data-carousel-next]');
  const dotsWrap      = document.querySelector('[data-carousel-dots]');

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function itemHref(title) {
    return 'store-item.html?id=' + encodeURIComponent(title);
  }

  function thumbUrl(name) {
    // encode spaces/unicode but not the slashes
    return 'thumbnails/webp/' + encodeURIComponent(name) + '.webp';
  }

  // ---------- Grid ----------
  function renderGrid(patches) {
    grid.innerHTML = '';
    if (!patches.length) {
      const empty = document.createElement('div');
      empty.className = 'grid-state';
      empty.textContent = 'No patches available yet.';
      grid.appendChild(empty);
      return;
    }
    patches.forEach(p => {
      const a = document.createElement('a');
      a.className = 'store-item';
      a.href = itemHref(p.Title);
      a.innerHTML = `
        <div class="preview">
          <img src="${thumbUrl(p.StoreThumb)}" alt="" loading="lazy" />
        </div>
        <div class="body">
          <div class="row">
            <h3>${esc(p.Title)}</h3>
            ${p.Price ? `<span class="price">${esc(p.Price)}</span>` : ''}
          </div>
          ${p.Author ? `<p class="author">By ${esc(p.Author)}</p>` : ''}
          ${p.Description ? `<p>${esc(p.Description)}</p>` : ''}
        </div>
      `;
      grid.appendChild(a);
    });
  }

  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) { h = 0; s = 0; }
    else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
        case g: h = ((b - r) / d + 2); break;
        case b: h = ((r - g) / d + 4); break;
      }
      h *= 60;
    }
    return { h, s, l };
  }

  function extractDominantColor(img) {
    try {
      const size = 48;
      const canvas = document.createElement('canvas');
      canvas.width = size; canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, size, size);
      const data = ctx.getImageData(0, 0, size, size).data;

      // Bucket pixels by hue (15° bins) and coarse lightness.
      // Ignore grays, near-black, and near-white so a dark UI
      // chrome doesn't drown out the real accent color.
      const buckets = new Map();
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] < 200) continue;
        const { h, s, l } = rgbToHsl(data[i], data[i + 1], data[i + 2]);
        if (s < 0.15) continue;
        if (l < 0.08 || l > 0.92) continue;
        const key = Math.round(h / 15) + '-' + Math.round(l * 10);
        const hit = buckets.get(key);
        if (hit) { hit.count++; hit.hSum += h; hit.sSum += s; hit.lSum += l; }
        else buckets.set(key, { count: 1, hSum: h, sSum: s, lSum: l });
      }
      if (!buckets.size) return null;

      // Score = frequency weighted slightly by saturation.
      let best = null;
      buckets.forEach(b => {
        const score = b.count * (1 + b.sSum / b.count);
        if (!best || score > best.score) best = Object.assign({}, b, { score });
      });
      return {
        h: best.hSum / best.count,
        s: best.sSum / best.count,
        l: best.lSum / best.count,
      };
    } catch (e) { return null; }
  }

  function applySlideColor(slideEl, hsl) {
    if (!hsl) return; // keep CSS default
    // Clamp into a comfortable dark-background range so white text is always legible.
    const l = Math.max(0.18, Math.min(hsl.l, 0.32));
    const s = Math.min(hsl.s, 0.6);
    const h = Math.round(hsl.h);
    const sPct = Math.round(s * 100);
    const lPct = Math.round(l * 100);
    const lPct2 = Math.max(10, lPct - 10);
    slideEl.style.background =
      `linear-gradient(135deg, hsl(${h} ${sPct}% ${lPct}%) 0%, hsl(${h} ${sPct}% ${lPct2}%) 100%)`;
  }
  // ---------- Carousel ----------
  function renderCarousel(slides) {
    if (!slides.length) return;

    carouselSec.hidden = false;

    track.innerHTML = '';
    slides.forEach(({ image, patch }) => {
      const a = document.createElement('a');
      a.className = 'carousel-slide';
      a.href = itemHref(patch.Title);
      a.innerHTML = `
        <div class="slide-inner">
          <div class="slide-text">
            <p class="eyebrow">Featured</p>
            <h3>${esc(patch.Title)}</h3>
            ${patch.Author ? `<p class="author">By ${esc(patch.Author)}</p>` : ''}
            ${patch.Description ? `<p class="desc">${esc(patch.Description)}</p>` : ''}
          </div>
          <div class="slide-art">
            <img alt="" />
          </div>
        </div>
      `;
      track.appendChild(a);

      // Swap in the thumbnail and pull its dominant color once loaded.
      const imgEl = a.querySelector('.slide-art img');
      imgEl.addEventListener('load', () => {
        applySlideColor(a, extractDominantColor(imgEl));
      }, { once: true });
      imgEl.src = thumbUrl(image);
    });

    // ---------- unchanged below this line ----------
    dotsWrap.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', e => { e.preventDefault(); goTo(i, true); });
      dotsWrap.appendChild(dot);
    });

    if (slides.length <= 1) {
      prevBtn.hidden = true; nextBtn.hidden = true; dotsWrap.hidden = true;
    }

    let current = 0, autoTimer = null;
    function goTo(i, user) {
      const n = slides.length;
      current = ((i % n) + n) % n;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      dotsWrap.querySelectorAll('.carousel-dot').forEach((d, j) =>
        d.classList.toggle('active', j === current));
      if (user) restartAuto();
    }
    function startAuto() { if (slides.length <= 1) return; stopAuto(); autoTimer = setInterval(() => goTo(current + 1), 6000); }
    function stopAuto()   { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }
    function restartAuto(){ stopAuto(); startAuto(); }

    prevBtn.addEventListener('click', e => { e.preventDefault(); goTo(current - 1, true); });
    nextBtn.addEventListener('click', e => { e.preventDefault(); goTo(current + 1, true); });

    const carouselEl = document.querySelector('[data-carousel]');
    carouselEl.addEventListener('mouseenter', stopAuto);
    carouselEl.addEventListener('mouseleave', startAuto);
    document.addEventListener('visibilitychange', () => { document.hidden ? stopAuto() : startAuto(); });
    startAuto();
  }

  // ---------- Fetch + orchestration ----------
  fetch('store.json')
    .then(r => {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(data => {
      const patches = (data && data.Patches ? data.Patches.slice() : []);
      patches.sort((a, b) => new Date(b['Release date']) - new Date(a['Release date']));

      if(grid) renderGrid(patches);

      const slides = FEATURED
        .map(h => ({ image: h.image, patch: patches.find(p => p.Title === h.title) }))
        .filter(s => s.patch);
      renderCarousel(slides);
    })
    .catch(err => {
      console.error('Failed to load store.json:', err);
      if (gridState) {
        gridState.textContent = 'Couldn\u2019t load the store right now. Please try again later.';
      }
    });
}

(function () {
  'use strict';

  // ---------- OS detection ----------
  function detectOS() {
    if (typeof navigator === 'undefined') return { id: 'unknown', label: 'your platform' };
    var ua = (navigator.userAgent || '').toLowerCase();
    var platform = (navigator.platform || '').toLowerCase();
    var os = 'unknown', label = 'your platform';

    if (/mac|iphone|ipad|ipod/.test(ua) || platform.indexOf('mac') !== -1) { os = 'macos'; label = 'macOS'; }
    else if (/win/.test(ua)) { os = 'windows'; label = 'Windows'; }
    else if (/linux|x11/.test(ua)) { os = 'linux'; label = 'Linux'; }
    else if (/bsd/.test(ua)) { os = 'bsd'; label = 'BSD'; }

    return { id: os, label: label };
  }

  function applyOS() {
    var os = detectOS();

    // Home page download CTA
    var cta = document.querySelector('[data-os-cta]');
    if (cta) {
      var labelEl = cta.querySelector('[data-os-label]');
      if (labelEl) labelEl.textContent = os.label;
      if (os.id !== 'unknown') {
        cta.setAttribute('href', 'download.html#' + os.id);
      } else {
        cta.setAttribute('href', 'download.html');
      }
    }

    // Download page recommended card
    var rec = document.querySelector('[data-os-recommended]');
    if (rec) {
      var name = rec.querySelector('[data-os-name]');
      var note = document.querySelector('[data-os-unknown-note]');
      if (os.id === 'unknown') {
        if (note) note.style.display = '';
      } else {
        if (name) name.textContent = os.label;
        // Highlight the matching block in the OS picker
        var pick = document.querySelector('[data-os-picker] [data-os="' + os.id + '"]');
        if (pick) pick.style.borderColor = 'hsl(var(--primary))';
        // Hide non-matching primary download buttons
        document.querySelectorAll('[data-os-primary]').forEach(function (el) {
          el.style.display = el.getAttribute('data-os-primary') === os.id ? '' : 'none';
        });
      }
    }
  }

  // ---------- Mobile nav ----------
  function setupMobileNav() {
    var toggle = document.querySelector('[data-menu-toggle]');
    var menu = document.querySelector('[data-mobile-nav]');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
  }

  // ---------- Active nav highlighting ----------
  function setupActiveNav() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    if (path === '') path = 'index.html';
    document.querySelectorAll('[data-nav-link]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === path) a.classList.add('active');
    });
  }

  // ---------- Year in footer ----------
  function setupYear() {
    var el = document.querySelector('[data-year]');
    if (el) el.textContent = String(new Date().getFullYear());
  }
  document.addEventListener('DOMContentLoaded', function () {
    applyOS();
    setupMobileNav();
    setupActiveNav();
    setupYear();
  });
})();
