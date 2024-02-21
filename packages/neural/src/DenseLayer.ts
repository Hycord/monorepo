import { ActivationFunctionName } from ".";
import { Layer } from "./lib/Layer";

export class DenseLayer extends Layer {
  private _size: number;

  constructor(activation: ActivationFunctionName, size: number) {
    super(activation);

    this._size = size;
  }
}
