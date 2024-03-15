import { Matrix } from "@hycord/math";
import {
  ActivationFunction,
  ActivationFunctionName,
  ActivationFunctions,
} from "./functions/ActivationFunction";

export abstract class Layer {
  protected inputs!: Matrix;
  protected outputs!: Matrix;

  public abstract forward(input: Matrix): Matrix;

  public abstract backward(
    outputGradient: Matrix,
    learningRate: number
  ): Matrix;
}
