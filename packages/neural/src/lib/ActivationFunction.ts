export const ActivationFunctions = {
  relu: (x: number) => (Math.abs(x) + x) / 2,
  softmax: (outputs: number[]): number[] => {
    const max = Math.max(...outputs);
    let sumExps = 0;
    const softmaxOutputs: number[] = [];

    for (let i = 0; i < outputs.length; i++) {
      const exp = Math.exp(outputs[i]! - max);
      softmaxOutputs[i] = exp;
      sumExps += exp;
    }

    return softmaxOutputs.map((exp) => exp / sumExps);
  },
};
export type ActivationFunctionName = keyof typeof ActivationFunctions;
export type ActivationFunction =
  (typeof ActivationFunctions)[ActivationFunctionName];
