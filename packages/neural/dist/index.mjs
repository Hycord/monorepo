// src/lib/functions/ActivationFunction.ts
import { Matrix } from "@hycord/math";
var ActivationFunctions = {
  relu: (inputs) => inputs.map((x) => x >= 0 ? x : 0),
  softmax: (input) => {
    const result = new Matrix(input.rows, input.cols);
    for (let i = 0; i < input.rows; i++) {
      const maxVal = Math.max(
        ...input.data.slice(i * input.cols, (i + 1) * input.cols)
      );
      let expSum = 0;
      for (let j = 0; j < input.cols; j++) {
        const exponent = Math.exp(input.get(i, j) - maxVal);
        result.set(i, j, exponent);
        expSum += exponent;
      }
      for (let j = 0; j < input.cols; j++) {
        const normalizedValue = result.get(i, j) / expSum;
        result.set(i, j, normalizedValue);
      }
    }
    return result;
  },
  tanh: (inputs) => {
    const result = new Matrix(inputs.rows, inputs.cols);
    for (let i = 0; i < inputs.data.length; i++) {
      const val = inputs.data[i];
      result.data[i] = (Math.exp(val) - Math.exp(-val)) / (Math.exp(val) + Math.exp(-val));
    }
    return result;
  },
  none: (inputs) => inputs
};
function parseActivationFunction(input) {
  return typeof input === "string" ? ActivationFunctions[input] : input;
}

// src/lib/functions/PrimeActivationFunction.ts
var PrimeActivationFunctions = {
  tanh: (inputs) => inputs,
  none: (inputs) => inputs
};
function parsePrimeActivationFunction(input) {
  return typeof input == "string" ? PrimeActivationFunctions[input] : input;
}

// src/lib/functions/LossFunction.ts
var LossFunctions = {
  meanSquaredError: (predicted, actual) => {
    if (actual.rows !== predicted.rows || actual.cols !== predicted.cols) {
      throw new Error("Matrix dimensions must be equal for meanSquaredError");
    }
    const squaredDifferences = actual.subtract(predicted).map((value) => value ** 2);
    const mse = squaredDifferences.reduce((acc, value) => acc + value, 0) / actual.size;
    return mse;
  }
};
function parseLossFunction(input) {
  return typeof input === "string" ? LossFunctions[input] : input;
}

// src/lib/functions/PrimeLossFunction.ts
var PrimeLossFunctions = {
  meanSquaredError: (predicted, actual) => {
    if (actual.rows !== predicted.rows || actual.cols !== predicted.cols) {
      throw new Error(
        "Matrix dimensions must be equal for meanSquaredErrorPrime"
      );
    }
    const msePrime = predicted.subtract(actual).scalarMultiply(2).scalarMultiply(1 / actual.size);
    return msePrime;
  }
};
function parsePrimeLossFunction(input) {
  return typeof input == "string" ? PrimeLossFunctions[input] : input;
}

// src/lib/DenseLayer.ts
import { Matrix as Matrix2 } from "@hycord/math";

// src/lib/Layer.ts
var Layer = class {
  inputs;
  outputs;
};

// src/lib/DenseLayer.ts
var DenseLayer = class extends Layer {
  weights;
  biases;
  constructor(inputSize, outputSize) {
    super();
    this.weights = Matrix2.randomNormal(outputSize, inputSize);
    this.biases = Matrix2.randomNormal(outputSize, 1);
  }
  forward(input) {
    this.inputs = input;
    return this.weights.dotProduct(this.inputs).add(this.biases);
  }
  backward(outputGradient, learningRate) {
    const errors = outputGradient.dotProduct(this.weights);
    const inputTranspose = this.inputs.transpose();
    const gradients = outputGradient.dotProduct(inputTranspose).scalarMultiply(learningRate);
    const newWeights = this.weights.subtract(gradients);
    this.weights = newWeights;
    this.biases = this.biases.subtract(outputGradient);
    return errors.transpose();
  }
};

// src/lib/ActivationLayer.ts
var Activation = class extends Layer {
  activationFunction;
  primeActivation;
  constructor(activation = "none", primeActivation = "none") {
    super();
    this.activationFunction = parseActivationFunction(activation);
    this.primeActivation = parsePrimeActivationFunction(primeActivation);
  }
  forward(input) {
    this.inputs = input;
    return this.activationFunction(this.inputs);
  }
  backward(outputGradient, learningRate) {
    return outputGradient;
  }
};

// src/lib/NeuralNetwork.ts
var NeuralNetwork = class {
  layers;
  constructor(layers) {
    this.layers = layers;
  }
  forward(input) {
    let output = input;
    for (const layer of this.layers) {
      output = layer.forward(output);
    }
    return output;
  }
  backward(dOutput) {
    let gradients = dOutput;
    for (let i = this.layers.length - 1; i >= 0; i--) {
      gradients = this.layers[i].backward(gradients, 0.1);
    }
    return gradients;
  }
  initializeParameters() {
    for (const layer of this.layers) {
    }
  }
};

// src/lib/ActivationLayers/Tanh.ts
var Tanh = class extends Activation {
  constructor() {
    super("tanh", "tanh");
  }
};

// src/lib/Loss.ts
function BackPropogate(predicted, actual, layers, learningRate = 0.1, lossFunctionP = "meanSquaredError", primeLossFunctionP = "meanSquaredError") {
  const lossFunction = parseLossFunction(lossFunctionP);
  const primeLossFunction = parsePrimeLossFunction(primeLossFunctionP);
  let error = lossFunction(predicted, actual);
  let gradient = primeLossFunction(predicted, actual);
  for (const layer of layers.reverse()) {
    gradient = layer.backward(gradient, learningRate);
  }
  layers.reverse();
  return error;
}

// src/FeedForwardNetworkLayer.ts
import { random } from "@hycord/math";
var FeedForwardNetworkLayer = class _FeedForwardNetworkLayer {
  _inputs;
  outputs;
  _biases;
  _weights;
  constructor(inputs, outputs) {
    this._inputs = new Array(inputs).fill(0);
    this.outputs = new Array(outputs).fill(0);
    this._biases = new Array(outputs).fill(0);
    this._weights = [];
    for (let i = 0; i < inputs; i++) {
      this._weights[i] = new Array(outputs).fill(0);
    }
    this.randomize();
  }
  toData() {
    return {
      inputCount: this._inputs.length,
      outputCount: this.outputs.length,
      weights: this._weights,
      biases: this._biases
    };
  }
  toDataString() {
    return JSON.stringify(this.toData());
  }
  static fromData(data) {
    const { inputCount, outputCount, weights, biases } = data;
    const layer = new _FeedForwardNetworkLayer(0, 0);
    layer._inputs = new Array(inputCount).fill(0);
    layer.outputs = new Array(outputCount).fill(0);
    layer._weights = weights;
    layer._biases = biases;
    return layer;
  }
  randomize() {
    for (let i = 0; i < this._weights.length; i++) {
      for (let j = 0; j < this._weights[0].length; j++) {
        this._weights[i][j] = random(-1, 1);
      }
    }
    for (let i = 0; i < this._biases.length; i++) {
      this._biases[i] = random(-1, 1);
    }
  }
  feedForward(inputs) {
    if (this._inputs.length !== inputs.length) {
      throw new Error(
        `Invalid input length (${this._inputs.length} ${inputs.length})`
      );
    }
    for (let i = 0; i < this._inputs.length; i++) {
      this._inputs[i] = inputs[i];
    }
    for (let i = 0; i < this.outputs.length; i++) {
      let sum = 0;
      for (let j = 0; j < this._inputs.length; j++) {
        sum += this._inputs[j] * this._weights[j][i];
      }
      this.outputs[i] = this.sigmoid(sum + this._biases[i]);
    }
    return this.outputs;
  }
  sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  }
  get inputSize() {
    return this._inputs.length;
  }
  backwardPass(nextLayerError, learningRate) {
    const errors = new Array(this._inputs.length).fill(0);
    for (let i = 0; i < this.outputs.length; i++) {
      for (let j = 0; j < this._inputs.length; j++) {
        errors[j] += nextLayerError[i] * this._weights[j][i];
        const gradient = nextLayerError[i] * this.outputs[i] * (1 - this.outputs[i]) * this._inputs[j];
        this._weights[j][i] += learningRate * gradient;
      }
      this._biases[i] += learningRate * nextLayerError[i] * this.outputs[i] * (1 - this.outputs[i]);
    }
    return errors;
  }
};

// src/FeedForwardNetworkTrainer.ts
import { Logger } from "@hycord/logger";
var FeedForwardNeuralNetworkTrainer = class {
  network;
  logger;
  constructor(network) {
    this.network = network;
    this.logger = new Logger("FFNNTrainer");
  }
  train(data, epochs, learningRate) {
    for (let i = 0; i < epochs; i++) {
      for (const sample of data) {
        this.network.train(sample.inputs, sample.expectedOutput, learningRate);
      }
    }
  }
  test(data, log = true) {
    const results = [];
    for (const sample of data) {
      const { inputs, expectedOutput } = sample;
      const prediction = this.network.feedForward(inputs);
      const result = deepEqual(expectedOutput, prediction.map(Math.round));
      results.push(result);
      if (log)
        this.logger.data(
          `Input: [${inputs.join(", ")}], Expected Output: ${expectedOutput}, Predicted Output: ${prediction.map(Math.round)}, Correct: ${result}`
        );
    }
    return results;
  }
};
function deepEqual(x, y) {
  const ok = Object.keys, tx = typeof x, ty = typeof y;
  return x && y && tx === "object" && tx === ty ? ok(x).length === ok(y).length && ok(x).every(
    (key) => deepEqual(x[key], y[key])
  ) : x === y;
}

// src/FeedForwardNeuralNetwork.ts
var FeedForwardNeuralNetwork = class _FeedForwardNeuralNetwork {
  _layers;
  _softmax;
  constructor(layers, softmax = false) {
    this._layers = [];
    this._softmax = softmax;
    for (let i = 0; i < layers.length - 1; i++) {
      this._layers[i] = new FeedForwardNetworkLayer(layers[i], layers[i + 1]);
    }
  }
  static fromData({
    config: { softmax },
    layers
  }) {
    console.log("loading from data");
    const net = new _FeedForwardNeuralNetwork([]);
    net._layers = layers.map(FeedForwardNetworkLayer.fromData);
    net._softmax = softmax;
    return net;
  }
  toData() {
    return JSON.stringify({
      config: { softmax: this._softmax },
      layers: this._layers.map((l) => l.toData())
    });
  }
  feedForward(inputs) {
    let outputs = this._layers[0].feedForward(inputs);
    for (let i = 1; i < this._layers.length; i++) {
      outputs = this._layers[i].feedForward(outputs.map(this.RELU));
    }
    return this._softmax ? this.softmax(outputs) : outputs;
  }
  RELU(x) {
    return (Math.abs(x) + x) / 2;
  }
  softmax(outputs) {
    const max = Math.max(...outputs);
    const exps = outputs.map((x) => Math.exp(x - max));
    const sumExps = exps.reduce((acc, val) => acc + val, 0);
    return exps.map((exp) => exp / sumExps);
  }
  get inputSize() {
    return this._layers[0].inputSize;
  }
  train(inputs, targets, learningRate) {
    this.feedForward(inputs);
    let error = this.calculateError(targets);
    for (let i = this._layers.length - 1; i >= 0; i--) {
      error = this._layers[i].backwardPass(error, learningRate);
    }
  }
  calculateError(targets) {
    const outputLayer = this._layers[this._layers.length - 1];
    const errors = [];
    for (let i = 0; i < outputLayer.outputs.length; i++) {
      errors[i] = targets[i] - outputLayer.outputs[i];
    }
    return errors;
  }
};
export {
  Activation,
  ActivationFunctions,
  BackPropogate,
  DenseLayer,
  FeedForwardNetworkLayer,
  FeedForwardNeuralNetwork,
  FeedForwardNeuralNetworkTrainer,
  Layer,
  LossFunctions,
  NeuralNetwork,
  PrimeActivationFunctions,
  PrimeLossFunctions,
  Tanh,
  parseActivationFunction,
  parseLossFunction,
  parsePrimeActivationFunction,
  parsePrimeLossFunction
};
