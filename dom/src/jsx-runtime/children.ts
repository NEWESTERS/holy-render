import type { LazyValue } from "@holy-render/reactivity";

export type LazyOrNot<T> = LazyValue<T> | T;

export type ArrayOrNot<T> = T[] | T;

type ValidChild = HTMLElement | string | boolean;

export type ChildrenProp = ArrayOrNot<LazyOrNot<ValidChild>>;

export function forEachChild(
  children: ChildrenProp,
  callback: (child: LazyValue<ValidChild>) => void
) {
  const list = Array.isArray(children) ? children : [children];

  list.forEach((item) => {
    if (typeof item === "function") {
      callback(item);
    } else {
      callback(() => item);
    }
  });
}
