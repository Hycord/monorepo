import { Activation } from "../ActivationLayer";

export class Tanh extends Activation {
  constructor() {
    super("tanh", "tanh");
  }
}
