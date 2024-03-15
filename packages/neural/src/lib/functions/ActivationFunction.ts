import { Matrix } from "@hycord/math";

export type ActivationFunction = (input: Matrix) => Matrix;
export const ActivationFunctions = {
  relu: (inputs: Matrix) => inputs.map((x) => (x >= 0 ? x : 0)),
  softmax: (input: Matrix) => {
    const result = new Matrix(input.rows, input.cols);

    for (let i = 0; i < input.rows; i++) {
      const maxVal = Math.max(
        ...input.data.slice(i * input.cols, (i + 1) * input.cols)
      );

      let expSum = 0;
      for (let j = 0; j < input.cols; j++) {
        const exponent = Math.exp(input.get(i, j)! - maxVal);
        result.set(i, j, exponent);
        expSum += exponent;
      }

      for (let j = 0; j < input.cols; j++) {
        const normalizedValue = result.get(i, j)! / expSum;
        result.set(i, j, normalizedValue);
      }
    }

    return result;
  },
  tanh: (inputs: Matrix) => {
    const result = new Matrix(inputs.rows, inputs.cols);
    for (let i = 0; i < inputs.data.length; i++) {
      const val = inputs.data[i]!;
      result.data[i] =
        (Math.exp(val) - Math.exp(-val)) / (Math.exp(val) + Math.exp(-val));
    }
    return result;
  },
  none: (inputs: Matrix) => inputs,
};

export type ActivationFunctionName = keyof typeof ActivationFunctions;
export type ParsableActivationFunction =
  | ActivationFunction
  | ActivationFunctionName;

export function parseActivationFunction(
  input: ParsableActivationFunction
): ActivationFunction {
  return typeof input === "string" ? ActivationFunctions[input] : input;
}
