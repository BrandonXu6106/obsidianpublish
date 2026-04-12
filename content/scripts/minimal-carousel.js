// minimal-carousel.js for JS Engine
(() => {
  if (window.__obs_minimal_carousel_installed) return;
  window.__obs_minimal_carousel_installed = true;

  // 注入样式（只注入一次）
  if (!document.getElementById('obs-min-carousel-style')) {
    const style = document.createElement('style');
    style.id = 'obs-min-carousel-style';
    style.textContent = `
.obs-min-carousel { width:100%; max-width:900px; height:320px; margin:12px auto; position:relative; overflow:hidden; border-radius:6px; background:var(--background-primary); }
.obs-min-carousel .slides { display:flex; transition:transform .45s ease; height:100%; }
.obs-min-carousel .slide { flex:0 0 100%; display:flex; align-items:center; justify-content:center; height:100%; }
.obs-min-carousel img { max-width:100%; max-height:100%; object-fit:contain; }
.obs-min-carousel .nav { position:absolute; top:50%; transform:translateY(-50%); z-index:5; padding:6px 10px; background:rgba(0,0,0,0.18); color:var(--text-accent); cursor:pointer; border-radius:4px; user-select:none; }
.obs-min-carousel .nav.prev { left:8px; } .obs-min-carousel .nav.next { right:8px; }
.obs-min-carousel .dots { position:absolute; left:50%; transform:translateX(-50%); bottom:10px; display:flex; gap:8px; z-index:5; }
.obs-min-carousel .dot { width:10px; height:10px; border-radius:50%; background:var(--text-muted); cursor:pointer; }
`;
    document.head.appendChild(style);
  }

  function process(root = document) {
    root.querySelectorAll('Carousel').forEach((el) => {
      if (el.dataset.obsMinProcessed) return;
      el.dataset.obsMinProcessed = '1';

      const imgs = Array.from(el.querySelectorAll('img'));
      if (imgs.length === 0) { el.remove(); return; }

      const container = document.createElement('div');
      container.className = 'obs-min-carousel';
      container.dataset.index = '0';

      const slides = document.createElement('div');
      slides.className = 'slides';
      imgs.forEach(img => {
        const s = document.createElement('div');
        s.className = 'slide';
        s.appendChild(img.cloneNode(true));
        slides.appendChild(s);
      });

      const prev = document.createElement('div'); prev.className = 'nav prev'; prev.innerHTML = '&#10094;';
      const next = document.createElement('div'); next.className = 'nav next'; next.innerHTML = '&#10095;';
      const dots = document.createElement('div'); dots.className = 'dots';
      imgs.forEach((_, i) => {
        const d = document.createElement('div'); d.className = 'dot'; d.dataset.i = i;
        d.addEventListener('click', () => { container.dataset.index = i; update(container); });
        dots.appendChild(d);
      });

      prev.addEventListener('click', () => { container.dataset.index = Math.max(0, Number(container.dataset.index) - 1); update(container); });
      next.addEventListener('click', () => { container.dataset.index = Math.min(imgs.length - 1, Number(container.dataset.index) + 1); update(container); });

      container.appendChild(slides);
      container.appendChild(prev);
      container.appendChild(next);
      container.appendChild(dots);

      el.parentNode.replaceChild(container, el);
      update(container);
    });
  }

  function update(container) {
    const idx = Number(container.dataset.index || 0);
    const slides = container.querySelector('.slides');
    slides.style.transform = `translateX(-${idx * 100}%)`;
    container.querySelectorAll('.dot').forEach((d, i) => d.style.background = i === idx ? 'var(--text-accent)' : 'var(--text-muted)');
  }

  process();
  const mo = new MutationObserver(muts => { muts.forEach(m => { if (m.addedNodes.length) process(m.target || document); }); });
  mo.observe(document.body, { childList: true, subtree: true });
})();
