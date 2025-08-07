// 让分栏 callout里的脚注支持跳转（仅预览模式）

setTimeout(() => {
  // 处理分栏 callout里的脚注引用
  document.querySelectorAll('.callout[data-callout="column"] sup.footnote-ref').forEach((el) => {
    const num = el.textContent.replace(/\D/g, '');
    if (num) {
      el.innerHTML = `<a href="#footnote-${num}">${num}</a>`;
    }
  });

  // 给脚注内容加锚点
  document.querySelectorAll('.footnotes-list li').forEach((li) => {
    const num = li.querySelector('.footnote-num')?.textContent || '';
    if (num) li.id = `footnote-${num}`;
  });
}, 500);