import { Matrix } from "@hycord/math";
export type PrimeLossFunction = (predicted: Matrix, actual: Matrix) => Matrix;

export const PrimeLossFunctions = {
  meanSquaredError: (predicted: Matrix, actual: Matrix) => {
    if (actual.rows !== predicted.rows || actual.cols !== predicted.cols) {
      throw new Error(
        "Matrix dimensions must be equal for meanSquaredErrorPrime"
      );
    }

    const msePrime = predicted
      .subtract(actual)
      .scalarMultiply(2)
      .scalarMultiply(1 / actual.size);
    return msePrime;
  },
};

export type PrimeLossFunctionName = keyof typeof PrimeLossFunctions;
export type ParsablePrimeLossFunction =
  | PrimeLossFunction
  | PrimeLossFunctionName;

export function parsePrimeLossFunction(
  input: ParsablePrimeLossFunction
): PrimeLossFunction {
  return typeof input == "string" ? PrimeLossFunctions[input] : input;
}
