import { createEffect } from "@holy-render/reactivity";

import { forEachChild, type ChildrenProp } from "./children.js";

export interface DivProps {
  class?: string;
  children?: ChildrenProp;
}

export function createDivElement(type: "div", props: DivProps): HTMLElement {
  const element = document.createElement(type);

  if (props.class) {
    element.classList.add(props.class);
  }

  if (props.children) {
    forEachChild(props.children, ($child) => {
      createEffect(() => {
        const child = $child();

        if (child instanceof HTMLElement) {
          element.appendChild(child);

          return () => {
            child.remove();
          };
        } else if (typeof child === "string") {
          const textNode = document.createTextNode(child);

          element.appendChild(textNode);

          return () => {
            textNode.remove();
          };
        }
      }).trigger();
    });
  }

  return element;
}
