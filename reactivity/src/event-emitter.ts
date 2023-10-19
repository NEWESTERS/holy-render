import type { Observable, Observer } from "./interfaces.js";

export interface EventEmitter<Args extends any[]> extends Observable<Args> {
  emit(...args: Args): void;
}

export function createEventEmitter<Args extends any[]>(): EventEmitter<Args> {
  const observers = new Set<Observer<Args>>();

  return {
    subscribe(observer) {
      observers.add(observer);

      return {
        dispose() {
          observers.delete(observer);
        },
      };
    },
    emit(...args) {
      observers.forEach((observer) => {
        observer.trigger(...args);
      });
    },
  };
}
