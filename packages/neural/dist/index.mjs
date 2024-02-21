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
  FeedForwardNeuralNetwork,
  FeedForwardNeuralNetworkTrainer
};
