import util from 'util';
import {
  Vec2D,
  addThenScaleVec2D,
  addVec2D,
  angleVec2D,
  approximatesVec2D,
  ceilVec2D,
  // cloneVec2D,
  copyVec2DInPlace,
  createVec2D,
  distanceBetweenVec2D,
  distanceBetweenVec2DSquared,
  divideVec2d,
  dotVec2D,
  equalsVec2D,
  floorVec2D,
  inverseVec2D,
  lengthVec2D,
  lengthVec2DSquared,
  lerpVec2D,
  maxVec2D,
  minVec2D,
  multiplyVec2D,
  negateVec2D,
  normalizeVec2D,
  randomVec2D,
  rotateVec2D,
  roundVec2D,
  scaleVec2D,
  setVec2D,
  subtractVec2D,
  zeroVec2D,
} from './Vec2DUtils';

export class Vector2D {
  private value: Vec2D;

  constructor(x: number = 0, y: number = 0) {
    this.value = createVec2D();
    this.set(x, y);
  }

  [util.inspect.custom]() {
    return this.toString();
  }

  toString(): string {
    return `Vector2D ( ${this.x.toLocaleString()}, ${this.y.toLocaleString()} )`;
  }

  get x() {
    return this.value[0];
  }
  get y() {
    return this.value[1];
  }

  static random(scale?: number): Vector2D {
    const value = randomVec2D(createVec2D(), scale);
    return new Vector2D(value[0], value[1]);
  }

  static create(): Vector2D {
    const vec = createVec2D();
    return new Vector2D(vec[0], vec[1]);
  }

  static fromValues(x: number, y: number): Vector2D {
    return new Vector2D(x, y);
  }

  static randomUnit(): Vector2D {
    const x = Math.random() * 2 - 1; // Random number between -1 and 1
    const y = Math.random() * 2 - 1; // Random number between -1 and 1
    const vec = Vector2D.fromValues(x, y); // Create vector with random components
    return vec.normalize(); // Normalize vector to have magnitude 1
  }

  distanceBetween(vec: Vector2D): number {
    return distanceBetweenVec2D(this.value, vec.value);
  }

  distanceBetweenSquared(vec: Vector2D): number {
    return distanceBetweenVec2DSquared(this.value, vec.value);
  }

  length(): number {
    return lengthVec2D(this.value);
  }

  lengthSquared(): number {
    return lengthVec2DSquared(this.value);
  }

  dot(vec: Vector2D): number {
    return dotVec2D(this.value, vec.value);
  }

  equals(vec: Vector2D): boolean {
    return equalsVec2D(this.value, vec.value);
  }

  approximates(vec: Vector2D): boolean {
    return approximatesVec2D(this.value, vec.value);
  }

  clone(): Vector2D {
    return new Vector2D(this.value[0], this.value[1]);
  }

  copyInPlace(existing: Vector2D): this {
    this.value = copyVec2DInPlace(this.value, existing.value);
    return this;
  }

  set(x: number, y: number): this {
    this.value = setVec2D(this.value, x, y);
    return this;
  }

  add(vec: Vector2D): this {
    this.value = addVec2D(this.value, this.value, vec.value);
    return this;
  }

  subtract(vec: Vector2D): this {
    this.value = subtractVec2D(this.value, this.value, vec.value);
    return this;
  }

  multiply(vec: Vector2D): this {
    this.value = multiplyVec2D(this.value, this.value, vec.value);
    return this;
  }

  divide(vec: Vector2D): this {
    this.value = divideVec2d(this.value, this.value, vec.value);
    return this;
  }

  ceil(): this {
    this.value = ceilVec2D(this.value, this.value);
    return this;
  }

  floor(): this {
    this.value = floorVec2D(this.value, this.value);
    return this;
  }

  min(vec: Vector2D): this {
    this.value = minVec2D(this.value, this.value, vec.value);
    return this;
  }

  max(vec: Vector2D): this {
    this.value = maxVec2D(this.value, this.value, vec.value);
    return this;
  }

  round(): this {
    this.value = roundVec2D(this.value, this.value);
    return this;
  }

  scale(scaler: number): this {
    this.value = scaleVec2D(this.value, this.value, scaler);
    return this;
  }

  addThenScale(vec: Vector2D, scaler: number): this {
    this.value = addThenScaleVec2D(this.value, this.value, vec.value, scaler);
    return this;
  }

  negate(): this {
    this.value = negateVec2D(this.value, this.value);
    return this;
  }

  inverse(): this {
    this.value = inverseVec2D(this.value, this.value);
    return this;
  }

  normalize(): this {
    this.value = normalizeVec2D(this.value, this.value);
    return this;
  }

  lerp(vec: Vector2D, i: number): this {
    this.value = lerpVec2D(this.value, this.value, vec.value, i);
    return this;
  }

  rotate(origin: Vector2D, radians: number): this {
    this.value = rotateVec2D(this.value, this.value, origin.value, radians);
    return this;
  }

  angle(vec: Vector2D): number {
    return angleVec2D(this.value, vec.value);
  }

  zero(): this {
    this.value = zeroVec2D(this.value);
    return this;
  }
}
