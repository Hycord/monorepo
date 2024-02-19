import { FeedForwardNetworkLayer } from "./FeedForwardNetworkLayer";

export class FeedForwardNeuralNetwork {
  private _layers: FeedForwardNetworkLayer[];
  private _softmax: boolean;
  constructor(layers: number[], softmax: boolean = false) {
    this._layers = [];

    this._softmax = softmax;
    for (let i = 0; i < layers.length - 1; i++) {
      this._layers[i] = new FeedForwardNetworkLayer(layers[i]!, layers[i + 1]!);
    }
  }

  public static fromData({
    config: { softmax },
    layers,
  }: {
    config: { softmax: boolean };
    layers: {
      inputCount: number;
      outputCount: number;
      weights: number[][];
      biases: number[];
    }[];
  }) {
    console.log("loading from data");
    const net = new FeedForwardNeuralNetwork([]);

    net._layers = layers.map(FeedForwardNetworkLayer.fromData);
    net._softmax = softmax;

    return net;
  }
  public toData() {
    return JSON.stringify({
      config: { softmax: this._softmax },
      layers: this._layers.map((l) => l.toData()),
    });
  }

  public feedForward(inputs: number[]): number[] {
    let outputs = this._layers[0]!.feedForward(inputs);
    for (let i = 1; i < this._layers.length; i++) {
      outputs = this._layers[i]!.feedForward(outputs);
    }
    return this._softmax ? this.softmax(outputs) : outputs;
  }

  private softmax(outputs: number[]): number[] {
    const max = Math.max(...outputs);
    const exps = outputs.map((x) => Math.exp(x - max));
    const sumExps = exps.reduce((acc, val) => acc + val, 0);
    return exps.map((exp) => exp / sumExps);
  }

  public get inputSize() {
    return this._layers[0]!.inputSize;
  }

  public train(
    inputs: number[],
    targets: number[],
    learningRate: number
  ): void {
    // Forward pass
    this.feedForward(inputs);

    // Backward pass
    let error = this.calculateError(targets);
    for (let i = this._layers.length - 1; i >= 0; i--) {
      error = this._layers[i]!.backwardPass(error, learningRate);
    }
  }

  private calculateError(targets: number[]): number[] {
    const outputLayer = this._layers[this._layers.length - 1]!;
    const errors: number[] = [];
    for (let i = 0; i < outputLayer.outputs.length; i++) {
      errors[i] = targets[i]! - outputLayer.outputs[i]!;
    }
    return errors;
  }
}
