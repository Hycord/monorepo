import { Matrix } from "@hycord/math";

export type PrimeActivationFunction = (input: Matrix) => Matrix;
export const PrimeActivationFunctions = {
  tanh: (inputs) => inputs,
  none: (inputs) => inputs,
} as const satisfies {
  [key in string]: PrimeActivationFunction;
};
export type PrimeActivationFunctionName = keyof typeof PrimeActivationFunctions;
export type ParsablePrimeActivationFunction =
  | PrimeActivationFunction
  | PrimeActivationFunctionName;

export function parsePrimeActivationFunction(
  input: ParsablePrimeActivationFunction
) {
  return typeof input == "string" ? PrimeActivationFunctions[input] : input;
}
