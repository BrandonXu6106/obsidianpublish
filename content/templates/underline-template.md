<%*
// 解决光标问题的优化版本
const editor = app.workspace.activeEditor?.editor;
if (!editor) return;

const selection = editor.getSelection();
const cursorPos = editor.getCursor();

if (selection) {
    editor.replaceSelection(`<u>${selection}</u>`);
} else {
    // 插入下划线标签但不破坏当前行
    editor.replaceRange("<u></u>", cursorPos);
    
    // 精准定位光标到标签内
    const newCursor = {
        line: cursorPos.line,
        ch: cursorPos.ch + 3
    };
    editor.setCursor(newCursor);
}
%>
