import { random } from "@hycord/math";
import { Point } from "./geometry";
import { Viewport } from "./viewport";

export class DigitClassificationPoint extends Point {
  private _scale: number;
  private _color: number;
  constructor(data: { x: number; y: number }, scale: number = 1) {
    super(data);
    this._scale = scale;
    this._color = 0;
  }

  public set color(color: number) {
    this._color = color;
  }

  public draw(view: Viewport) {
    view.shape((c) => {
      c.fillStyle = `rgb(${this._color},${this._color},${this._color})`;
      c.fillRect(this.x, this.y, this._scale, this._scale);
      c.fill();
    });
  }
}
