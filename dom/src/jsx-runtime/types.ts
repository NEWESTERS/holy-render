import type { InputProps } from "./input.js";
import type { DivProps } from "./div.js";

export namespace JSX {
  export interface IntrinsicElements {
    div: DivProps;
    input: InputProps;
  }
}
