import { Vector2D } from '..';

export class Point {
  private _value: Vector2D;

  constructor({ x, y }: { x: number; y: number }) {
    this._value = Vector2D.fromValues(x, y);
  }

  public distanceTo(point: Point) {
    return this._value.distanceBetween(point._value);
  }

  public equals(point: Point) {
    return this._value.equals(point._value);
  }

  public dot(point: Point) {
    return this._value.dot(point._value);
  }

  public subtract(point: Point) {
    return Point.fromVector2D(this._value.subtract(point._value));
  }

  public normalize() {
    return Point.fromVector2D(this._value.normalize());
  }

  public add(point: Point) {
    return Point.fromVector2D(this._value.add(point._value));
  }

  public scale(scaler: number) {
    return Point.fromVector2D(this._value.scale(scaler));
  }

  public average(point: Point) {
    return new Point({ x: (this.x + point.x) / 2, y: (this.y + point.y) / 2 });
  }

  public clone() {
    return new Point({
      x: this._value.x,
      y: this._value.y,
    });
  }

  public get x() {
    return this._value.x;
  }

  public get y() {
    return this._value.y;
  }  
  
  public set x(value: number) {
    this._value.set(value, this._value.y);
  }

  public set y(value: number) {
    this._value.set(this._value.x, value);
  }

  public static fromVector2D(vector2D: Vector2D) {
    return new Point({ x: vector2D.x, y: vector2D.y });
  }
}
