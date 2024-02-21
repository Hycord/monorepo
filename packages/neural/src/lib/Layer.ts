import {
  ActivationFunction,
  ActivationFunctionName,
  ActivationFunctions,
} from "./ActivationFunction";

export class Layer {
  private _inputSize: number | undefined;
  private _outputSize: number | undefined;
  private _nextLayer: Layer | null = null;
  private _activation: ActivationFunction;

  constructor(activation: ActivationFunctionName) {
    this._activation = ActivationFunctions[activation];
  }

  connect(nextLayer: Layer): void {
    // Connect this layer to the next layer
    if (this._outputSize !== undefined && nextLayer._inputSize !== undefined) {
      if (this._outputSize !== nextLayer._inputSize) {
        throw new Error("Incompatible layer sizes");
      }
    } else {
      throw new Error("Input/output size not defined for layers");
    }

    this._nextLayer = nextLayer;
    nextLayer._inputSize = this._outputSize;
  }

  forward(input: number[]): number[] {
    if (!this._nextLayer) {
      throw new Error("Next layer not connected");
    }

    // Forward propagation logic
    return this._nextLayer.forward(input);
  }
}
