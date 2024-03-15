import { Matrix } from "@hycord/math";

export type LossFunction = (predicted: Matrix, actual: Matrix) => number;

export const LossFunctions = {
  meanSquaredError: (predicted: Matrix, actual: Matrix) => {
    // Check dimensions
    if (actual.rows !== predicted.rows || actual.cols !== predicted.cols) {
      throw new Error("Matrix dimensions must be equal for meanSquaredError");
    }

    // Calculate squared differences
    const squaredDifferences = actual
      .subtract(predicted)
      .map((value) => value ** 2);

    // Calculate mean squared error
    const mse =
      squaredDifferences.reduce((acc, value) => acc + value, 0) / actual.size;
    return mse;
  },
};

export type LossFunctionName = keyof typeof LossFunctions;
export type ParsableLossFunction = LossFunction | LossFunctionName;

export function parseLossFunction(input: ParsableLossFunction): LossFunction {
  return typeof input === "string" ? LossFunctions[input] : input;
}
