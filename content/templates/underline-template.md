<%*
  let editor = app.workspace.activeEditor?.editor;
  if (editor) {
    let selectedText = editor.getSelection();
    if (selectedText) {
      editor.replaceSelection(`<u>${selectedText}</u>`);
    } else {
      editor.replaceSelection('<u></u>');
      // 移动光标
      let cursor = editor.getCursor();
      editor.setCursor({line: cursor.line, ch: cursor.ch - 4});
    }
  }
%>
