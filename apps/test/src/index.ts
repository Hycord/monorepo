import { Matrix, sum } from "@hycord/math";
import {
  Activation,
  ActivationFunctions,
  BackPropogate,
  DenseLayer,
  Layer,
  LossFunctions,
  PrimeLossFunctions,
  Tanh,
} from "@hycord/neural";
import { inspect } from "util";

const inputs = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];
const label = [0, 1, 1, 0];

function zip<T>(...arrays: T[][]): T[][] {
  const length = Math.min(...arrays.map((arr) => arr.length));
  return Array.from({ length }, (_, i) => arrays.map((arr) => arr[i]!));
}

const trainingdata = new Matrix(4, 2, inputs);
const traininglabels = new Matrix(4, 1, label);

const network: Layer[] = [
  new DenseLayer(2, 3),
  new Tanh(),
  new DenseLayer(3, 1),
  new Tanh(),
] as const;

const epochs = 10;
const learningRate = 0.9;

for (let epoch = 0; epoch < epochs; epoch++) {
  let error = 0;

  for (const [data, l] of zip([...trainingdata], [...traininglabels])) {
    if (!data || !l) continue;

    let output = new Matrix(2, 1, data.transpose());
    const label = new Matrix(1, 1, l);

    for (const layer of network) {
      output = layer.forward(output);
    }

    const lossFunction = LossFunctions.meanSquaredError;
    const primeLossFunction = PrimeLossFunctions.meanSquaredError;

    error += lossFunction(output, label);
    let gradient = primeLossFunction(output, label);
    for (const layer of network.reverse()) {
      gradient = layer.backward(gradient, learningRate);
    }
    network.reverse();
  }
  error /= trainingdata.rows;
  console.log(`${epoch + 1}/${epochs}, error=${(error * 100).toFixed(2)}`);
}
