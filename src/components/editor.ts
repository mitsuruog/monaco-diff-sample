import * as monaco from "monaco-editor";
import { DiffFile } from "../model";

class Editor {
  private editor: monaco.editor.IStandaloneDiffEditor;

  constructor(el: HTMLElement) {
    this.editor = monaco.editor.createDiffEditor(el, {
      readOnly: true,
      scrollBeyondLastColumn: 0,
      scrollBeyondLastLine: false,

      // Render the diff inline
      // renderSideBySide: false,
    });

    this.editor.onDidUpdateDiff(() => {
      const height = Math.max(
        this.editor.getModifiedEditor().getContentHeight(),
        this.editor.getOriginalEditor().getContentHeight()
      );

      el.style.height = `${height + 10}px`;
      el.style.width = `${window.innerWidth}px`;
      this.editor.layout({ height: height + 10, width: window.innerWidth });
    });
  }

  setModel = (original: DiffFile, modified: DiffFile) => {
    this.editor.setModel({
      original: monaco.editor.createModel(original.text, original.language),
      modified: monaco.editor.createModel(modified.text, modified.language),
    });
  };
}

export default Editor;
