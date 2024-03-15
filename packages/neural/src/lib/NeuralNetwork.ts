import { Matrix } from "@hycord/math";
import { Layer } from "./Layer";

export class NeuralNetwork {
  layers: Layer[];
  constructor(layers: Layer[]) {
    this.layers = layers;
  }

  forward(input: Matrix): Matrix {
    let output = input;
    for (const layer of this.layers) {
      output = layer.forward(output);
    }
    return output;
  }

  backward(dOutput: Matrix): Matrix {
    let gradients = dOutput;
    for (let i = this.layers.length - 1; i >= 0; i--) {
      gradients = this.layers[i]!.backward(gradients, 0.1);
    }
    return gradients;
  }

  initializeParameters(): void {
    for (const layer of this.layers) {
      // layer.initializeParameters();
    }
  }
}
