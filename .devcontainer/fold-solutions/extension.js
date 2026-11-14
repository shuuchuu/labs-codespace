// Folds a notebook's hints and solutions when it opens, as Colab collapses them.
//
// Colab collapses the headings `metadata.colab.collapsed_sections` lists (the cell
// IDs of the hints and solution headings: labs/scripts/sync_collapsed_solutions.py in
// shuuchuu/slides). VS Code reads no folding from a notebook's file, so this folds the
// same headings with `notebook.fold`, once per opening of the notebook: a section the
// trainee unfolds stays unfolded until its tab is closed.
const vscode = require("vscode");

const folded = new WeakSet();

async function fold(editor) {
  const notebook = editor?.notebook;
  if (!notebook || notebook.notebookType !== "jupyter-notebook" || folded.has(notebook)) {
    return;
  }
  folded.add(notebook);
  const ids = new Set(notebook.metadata?.metadata?.colab?.collapsed_sections ?? []);
  const headings = notebook
    .getCells()
    .filter((cell) => ids.has(cell.metadata?.metadata?.id))
    .map((cell) => cell.index);
  if (headings.length === 0) {
    return;
  }
  // `notebook.fold` folds in the active editor, and moves the focus to the heading.
  for (const index of headings.reverse()) {
    await vscode.commands.executeCommand("notebook.fold", { index, direction: "down" });
  }
  const top = new vscode.NotebookRange(0, 1);
  editor.selection = top;
  editor.revealRange(top, vscode.NotebookEditorRevealType.AtTop);
}

function activate(context) {
  context.subscriptions.push(vscode.window.onDidChangeActiveNotebookEditor(fold));
  // The notebook that activated the extension may already be open.
  return fold(vscode.window.activeNotebookEditor);
}

module.exports = { activate };
