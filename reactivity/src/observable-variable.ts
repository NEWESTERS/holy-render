import { createBox } from "./box.js";
import { createEventEmitter } from "./event-emitter.js";
import type { ObservableVariable } from "./interfaces.js";

export function createObservableValue<T>(
  initialValue: T
): ObservableVariable<T> {
  const eventEmitter = createEventEmitter();
  const box = createBox(initialValue);

  const observable: ObservableVariable<T> = () => box();

  observable.subscribe = eventEmitter.subscribe;

  observable.set = (newValue) => {
    if (newValue !== box()) {
      box.set(newValue);
      eventEmitter.emit();
    }
  };

  return observable;
}
