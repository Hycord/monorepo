import { FeedForwardNetworkLayer } from './FeedForwardNetworkLayer';

export class FeedForwardNeuralNetwork {
  private _layers: FeedForwardNetworkLayer[];

  constructor(layers: number[]) {
    this._layers = [];

    for (let i = 0; i < layers.length - 1; i++) {
      this._layers.push(
        new FeedForwardNetworkLayer(layers[i]!, layers[i + 1]!),
      );
    }
  }

  public feedForward(inputs: number[]): number[] {
    let outputs = this._layers[0]!.feedForward(inputs);
    for (let i = 1; i < this._layers.length; i++) {
      outputs = this._layers[i]!.feedForward(outputs);
    }
    return outputs;
  }

  public train(
    inputs: number[],
    targets: number[],
    learningRate: number,
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
