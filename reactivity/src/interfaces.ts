export interface Box<T> {
  (): T;
  set(value: T): void;
}

export interface Observer<Args extends any[]> {
  trigger(...args: Args): void;
}

export interface Disposable {
  dispose(): void;
}

export interface Observable<Args extends any[]> {
  subscribe(observer: Observer<Args>): Disposable;
}

export interface ObservableVariable<T> extends Observable<[]>, Box<T> {}

export type LazyValue<T> = (() => T) | ObservableVariable<T>;
