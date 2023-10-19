import type { ObservableVariable } from "./interfaces.js";
import { createObservableValue } from "./observable-variable.js";
import { trackObservable } from "./observable-tracker.js";

export function createSignal<T>(initialValue: T): ObservableVariable<T> {
  const observable = createObservableValue(initialValue);

  const signal: ObservableVariable<T> = () => {
    trackObservable(signal);
    return observable();
  };

  signal.subscribe = observable.subscribe;
  signal.set = observable.set;

  return signal;
}
