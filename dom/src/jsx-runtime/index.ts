import { createDivElement } from "./div.js";
import { createInputElement } from "./input.js";
import { type JSX } from "./types.js";

function jsx(type: string, props: any): HTMLElement {
  switch (type) {
    case "input":
      return createInputElement(type, props);

    case "div":
      return createDivElement(type, props);

    default:
      throw new Error(`Element tpe ${type} is not supported`);
  }
}

export { jsx, jsx as jsxs, type JSX };
