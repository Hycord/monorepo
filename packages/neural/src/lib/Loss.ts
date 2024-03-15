import { Matrix } from "@hycord/math";
import {
  LossFunction,
  ParsableLossFunction,
  ParsablePrimeLossFunction,
  PrimeLossFunction,
  parseLossFunction,
  parsePrimeLossFunction,
} from "..";
import { Layer } from "./Layer";

export function BackPropogate(
  predicted: Matrix,
  actual: Matrix,
  layers: Layer[],
  learningRate: number = 0.1,
  lossFunctionP: ParsableLossFunction = "meanSquaredError",
  primeLossFunctionP: ParsablePrimeLossFunction = "meanSquaredError"
) {
  const lossFunction = parseLossFunction(lossFunctionP);
  const primeLossFunction = parsePrimeLossFunction(primeLossFunctionP);

  let error = lossFunction(predicted, actual);
  let gradient = primeLossFunction(predicted, actual);
  for (const layer of layers.reverse()) {
    gradient = layer.backward(gradient, learningRate);
  }
  layers.reverse();
  return error;
}
