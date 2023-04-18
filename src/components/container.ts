import { DiffFile, diff } from "../model";
import Editor from "./editor";

class Container {
  private editorStore: Map<string, Editor> = new Map();

  constructor(el: HTMLElement | null) {
    if (el === null) {
      throw new Error("Container element is null");
    }

    const template = el.querySelector("template") as HTMLTemplateElement;

    diff.original.forEach((file) => {
      const clone = document.importNode(template.content, true);
      const title = clone.querySelector("[data-title]") as HTMLDivElement;
      title.setAttribute("data-title", file.name);
      title.textContent = file.name;

      const editor = clone.querySelector("[data-file]") as HTMLDivElement;
      editor.setAttribute("data-file", file.name);

      this.editorStore.set(file.name, new Editor(editor));

      el.appendChild(clone);
    });

    this.initialize();
  }

  initialize = () => {
    this.editorStore.forEach((editor, name) => {
      editor.setModel(
        diff.original.find((file) => file.name === name) as DiffFile,
        diff.modified.find((file) => file.name === name) as DiffFile
      );
    });
  };
}

export default Container;
