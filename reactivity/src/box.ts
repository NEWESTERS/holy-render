import { type Box } from "./interfaces.js";

export function createBox<T>(initialValue: T): Box<T> {
  let value = initialValue;

  const box: Box<T> = () => value;

  box.set = (newValue) => {
    value = newValue;
  };

  return box;
}
