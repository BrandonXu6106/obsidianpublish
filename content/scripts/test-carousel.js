// test-carousel.js - 简化测试版本
(() => {
  console.log('Carousel script loaded');

  function process(root = document) {
    console.log('Processing carousel elements...');
    root.querySelectorAll('Carousel').forEach((el) => {
      console.log('Found Carousel element:', el);
      if (el.dataset.processed) return;
      el.dataset.processed = '1';

      const imgs = Array.from(el.querySelectorAll('img'));
      console.log('Found images:', imgs.length);

      if (imgs.length === 0) {
        el.innerHTML = '<p>No images found in carousel</p>';
        return;
      }

      // 简单版本：只显示第一张图片和导航
      const container = document.createElement('div');
      container.style.cssText = `
        position: relative;
        width: 100%;
        max-width: 600px;
        margin: 20px auto;
        border: 2px solid red;
        padding: 10px;
      `;

      const imgContainer = document.createElement('div');
      imgContainer.appendChild(imgs[0].cloneNode(true));
      imgContainer.style.cssText = 'text-align: center;';

      const nav = document.createElement('div');
      nav.innerHTML = '<button onclick="alert(\'Prev\')">Prev</button> <button onclick="alert(\'Next\')">Next</button>';
      nav.style.cssText = 'text-align: center; margin-top: 10px;';

      container.appendChild(imgContainer);
      container.appendChild(nav);

      el.parentNode.replaceChild(container, el);
      console.log('Carousel processed successfully');
    });
  }

  // 延迟执行，确保DOM加载完成
  setTimeout(() => {
    process();
    console.log('Initial processing complete');
  }, 1000);

  // 监听后续变化
  const mo = new MutationObserver(muts => {
    muts.forEach(m => {
      if (m.addedNodes.length) {
        process(m.target || document);
      }
    });
  });
  mo.observe(document.body, { childList: true, subtree: true });
})();