import { Matrix, lerp } from "@hycord/math";
import { Layer } from "./Layer";

export class DenseLayer extends Layer {
  protected weights: Matrix;
  protected biases: Matrix;

  constructor(inputSize: number, outputSize: number) {
    super();
    this.weights = Matrix.randomNormal(outputSize, inputSize);
    this.biases = Matrix.randomNormal(outputSize, 1);
  }

  public forward(input: Matrix): Matrix {
    this.inputs = input;

    return this.weights.dotProduct(this.inputs).add(this.biases);
  }

  public backward(outputGradient: Matrix, learningRate: number): Matrix {
    const errors: Matrix = outputGradient.dotProduct(this.weights);

    const inputTranspose = this.inputs.transpose();
    const gradients: Matrix = outputGradient
      .dotProduct(inputTranspose)
      .scalarMultiply(learningRate);

    // Update weights

    const newWeights = this.weights.subtract(gradients);

    this.weights = newWeights;

    // Update biases
    this.biases = this.biases.subtract(outputGradient);

    return errors.transpose();
  }
}
