import type { Disposable, Observable, Observer } from "./interfaces.js";

const stack: Observer<[observable: Observable<any>]>[] = [];

export function trackObservable(observable: Observable<any>): void {
  const currentTracker = stack[stack.length - 1];

  if (currentTracker) {
    currentTracker.trigger(observable);
  }
}

export function startObservableTracking(
  observer: Observer<[observable: Observable<any>]>
): Disposable {
  stack.push(observer);

  return {
    dispose() {
      stack.pop();
    },
  };
}
