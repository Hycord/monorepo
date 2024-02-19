import { random } from "@hycord/math";

export class FeedForwardNetworkLayer {
  private _inputs: number[];
  public outputs: number[];
  private _biases: number[];
  private _weights: number[][];

  constructor(inputs: number, outputs: number) {
    this._inputs = new Array(inputs).fill(0);
    this.outputs = new Array(outputs).fill(0);
    this._biases = new Array(outputs).fill(0);

    this._weights = [];
    for (let i = 0; i < inputs; i++) {
      this._weights[i] = new Array(outputs).fill(0);
    }

    this.randomize();
  }

  public toData() {
    return {
      inputCount: this._inputs.length,
      outputCount: this.outputs.length,
      weights: this._weights,
      biases: this._biases,
    };
  }

  public toDataString() {
    return JSON.stringify(this.toData());
  }

  public static fromData(data: any) {
    const { inputCount, outputCount, weights, biases } = data as {
      inputCount: number;
      outputCount: number;
      weights: number[][];
      biases: number[];
    };

    const layer = new FeedForwardNetworkLayer(0, 0);
    layer._inputs = new Array(inputCount).fill(0);
    layer.outputs = new Array(outputCount).fill(0);
    layer._weights = weights;
    layer._biases = biases;

    return layer;
  }

  private randomize(): void {
    for (let i = 0; i < this._weights.length; i++) {
      for (let j = 0; j < this._weights[0]!.length; j++) {
        this._weights[i]![j] = random(-1, 1);
      }
    }
    for (let i = 0; i < this._biases.length; i++) {
      this._biases[i] = random(-1, 1);
    }
  }

  public feedForward(inputs: number[]): number[] {
    if (this._inputs.length !== inputs.length) {
      throw new Error(
        `Invalid input length (${this._inputs.length} ${inputs.length})`
      );
    }

    for (let i = 0; i < this._inputs.length; i++) {
      this._inputs[i] = inputs[i]!;
    }

    for (let i = 0; i < this.outputs.length; i++) {
      let sum = 0;
      for (let j = 0; j < this._inputs.length; j++) {
        sum += this._inputs[j]! * this._weights[j]![i]!;
      }

      this.outputs[i] = this.sigmoid(sum + this._biases[i]!);
    }
    return this.outputs;
  }

  private sigmoid(x: number): number {
    return 1 / (1 + Math.exp(-x));
  }

  public get inputSize() {
    return this._inputs.length;
  }

  public backwardPass(
    nextLayerError: number[],
    learningRate: number
  ): number[] {
    const errors: number[] = new Array(this._inputs.length).fill(0);

    for (let i = 0; i < this.outputs.length; i++) {
      for (let j = 0; j < this._inputs.length; j++) {
        errors[j] += nextLayerError[i]! * this._weights[j]![i]!;
        const gradient =
          nextLayerError[i]! *
          this.outputs[i]! *
          (1 - this.outputs[i]!) *
          this._inputs[j]!;
        this._weights[j]![i] += learningRate * gradient;
      }
      this._biases[i] +=
        learningRate *
        nextLayerError[i]! *
        this.outputs[i]! *
        (1 - this.outputs[i]!);
    }

    return errors;
  }
}
