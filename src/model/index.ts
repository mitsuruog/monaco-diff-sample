export type DiffFile = {
  name: string;
  language: string;
  text: string;
}

export const diff: { original: DiffFile[], modified: DiffFile[]} = {
  original: [
    {
      name: "main.js",
      language: "javascript",
      text: 'document.addEventListener("DOMContentLoaded", function() {\n // Put your code here\n});',
    },
    { name: "main.css", language: "css", text: "/* Put CSS here */\n" },
  ],
  modified: [
    {
      name: "main.js",
      language: "javascript",
      text: 'document.addEventListener("DOMContentLoaded", function() {\n const element = document.createElement("p");\n element.id = "new-element";\n element.classList.add("test");\n element.innerText = "This is new Element";\n document.body.append(element);\n});',
    },
    {
      name: "main.css",
      language: "css",
      text: "h1 {\n background: #ff0000;\n}\n\n.test {\n color: #ff0000;\n}",
    },
  ],
};
