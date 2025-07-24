const PATTERN = "[[content/"; // 需要替换的目标内容
const REPLACEMENT = "[[";  // 替换后的新内容

module.exports = async ({ quickAddApi, app }) => {
    const currentFile = app.workspace.getActiveFile();
    if (!currentFile) return;

    const content = await app.vault.read(currentFile);
    let count = 0;
    const newContent = content.replace(
        new RegExp(PATTERN.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), 
        () => {
            count++;
            return REPLACEMENT;
        }
    );

    if (count > 0) {
        await app.vault.modify(currentFile, newContent);
        new Notice(`✅ 替换完成！共修改 ${count} 处链接`);
    } else {
        new Notice("⚠️ 未找到需要替换的内容");
    }
};
