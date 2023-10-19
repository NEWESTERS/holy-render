import type { Observable, Observer } from "./interfaces.js";
import { startObservableTracking } from "./observable-tracker.js";

interface EffectCallback {
  (): (() => void) | void;
}

export function createEffect(callback: EffectCallback): Observer<[]> {
  const subscriptions = new Set<Observable<any>>();

  let cleanup: ReturnType<EffectCallback>;

  const observableTracker: Observer<[observable: Observable<any>]> = {
    trigger(observable) {
      if (!subscriptions.has(observable)) {
        observable.subscribe(effect);
        subscriptions.add(observable);
      }
    },
  };

  const effect: Observer<[]> = {
    trigger() {
      cleanup?.();

      const tracking = startObservableTracking(observableTracker);

      cleanup = callback();

      tracking.dispose();
    },
  };

  return effect;
}
