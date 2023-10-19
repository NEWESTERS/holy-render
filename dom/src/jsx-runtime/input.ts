import { createEffect, type LazyValue } from "@holy-render/reactivity";

export interface InputProps {
  class?: string;
  "bind:value": LazyValue<string>;
}

export function createInputElement(
  type: "input",
  props: InputProps
): HTMLElement {
  const element = document.createElement(type);

  if (props.class) {
    element.classList.add(props.class);
  }

  createEffect(() => {
    element.setAttribute("value", props["bind:value"]());
  }).trigger();

  if ("set" in props["bind:value"]) {
    const $value = props["bind:value"];

    element.addEventListener("input", (event) => {
      $value.set((event.target as any).value);
    });
  }

  return element;
}
