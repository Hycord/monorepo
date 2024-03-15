import { Matrix } from "@hycord/math";
import { Layer } from "./Layer";
import {
  ActivationFunction,
  ParsableActivationFunction,
  parseActivationFunction,
} from "./functions/ActivationFunction";
import {
  ParsablePrimeActivationFunction,
  PrimeActivationFunction,
  parsePrimeActivationFunction,
} from "./functions/PrimeActivationFunction";

export class Activation extends Layer {
  private activationFunction: ActivationFunction;
  private primeActivation: PrimeActivationFunction;

  constructor(
    activation: ParsableActivationFunction = "none",
    primeActivation: ParsablePrimeActivationFunction = "none"
  ) {
    super();
    this.activationFunction = parseActivationFunction(activation);
    this.primeActivation = parsePrimeActivationFunction(primeActivation);
  }

  public forward(input: Matrix): Matrix {
    this.inputs = input;
    return this.activationFunction(this.inputs);
  }

  public backward(outputGradient: Matrix, learningRate: number): Matrix {
    // const activationGradient = this.primeActivation(this.inputs);

    // const errors = outputGradient.dotProduct(activationGradient);
    // return errors;

    return outputGradient;
  }
}
