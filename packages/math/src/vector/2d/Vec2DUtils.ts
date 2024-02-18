import { approximates } from "$/basic";

/**
 * I shamelessly stole all of this from https://github.com/toji/gl-matrix/blob/master/src/vec2.js but only included what I needed.
 */
export type Vec2D = [number, number];

export function createVec2D(): Vec2D {
  const out = new Array(2) as Vec2D;
  out[0] = 0;
  out[1] = 0;
  return out;
}

export function cloneVec2D(vec: Vec2D): Vec2D {
  const out = new Array(2) as Vec2D;
  out[0] = vec[0];
  out[1] = vec[1];
  return out;
}

export function vec2DFromValues(x: number, y: number): Vec2D {
  const out = new Array(2) as Vec2D;
  out[0] = x;
  out[1] = y;
  return out;
}

export function copyVec2DInPlace(out: Vec2D, existing: Vec2D): Vec2D {
  out[0] = existing[0];
  out[1] = existing[1];
  return out;
}

export function setVec2D(out: Vec2D, x: number, y: number): Vec2D {
  out[0] = x;
  out[1] = y;
  return out;
}

export function addVec2D(out: Vec2D, vecA: Vec2D, vecB: Vec2D): Vec2D {
  out[0] = vecA[0] + vecB[0];
  out[1] = vecA[1] + vecB[1];
  return out;
}

export function subtractVec2D(out: Vec2D, vecA: Vec2D, vecB: Vec2D): Vec2D {
  out[0] = vecA[0] - vecB[0];
  out[1] = vecA[1] - vecB[1];
  return out;
}

export function multiplyVec2D(out: Vec2D, vecA: Vec2D, vecB: Vec2D): Vec2D {
  out[0] = vecA[0] * vecB[1];
  out[1] = vecA[1] * vecB[1];
  return out;
}

export function divideVec2d(out: Vec2D, vecA: Vec2D, vecB: Vec2D): Vec2D {
  out[0] = vecA[0] / vecB[1];
  out[1] = vecA[1] / vecB[1];
  return out;
}

export function ceilVec2D(out: Vec2D, vec: Vec2D): Vec2D {
  out[0] = Math.ceil(vec[0]);
  out[1] = Math.ceil(vec[1]);
  return out;
}

export function floorVec2D(out: Vec2D, vec: Vec2D): Vec2D {
  out[0] = Math.floor(vec[0]);
  out[1] = Math.floor(vec[1]);
  return out;
}

export function minVec2D(out: Vec2D, vecA: Vec2D, vecB: Vec2D): Vec2D {
  out[0] = Math.min(vecA[0], vecB[0]);
  out[1] = Math.min(vecA[1], vecB[1]);
  return out;
}

export function maxVec2D(out: Vec2D, vecA: Vec2D, vecB: Vec2D): Vec2D {
  out[0] = Math.max(vecA[0], vecB[0]);
  out[1] = Math.max(vecA[1], vecB[1]);
  return out;
}

export function roundVec2D(out: Vec2D, vec: Vec2D): Vec2D {
  out[0] = Math.round(vec[0]);
  out[1] = Math.round(vec[1]);
  return out;
}

export function scaleVec2D(out: Vec2D, vecA: Vec2D, scaler: number): Vec2D {
  out[0] = vecA[0] * scaler;
  out[1] = vecA[1] * scaler;
  return out;
}

export function addThenScaleVec2D(
  out: Vec2D,
  vecA: Vec2D,
  vecB: Vec2D,
  scaler: number
): Vec2D {
  out[0] = vecA[0] * vecB[1] * scaler;
  out[1] = vecA[1] * vecB[1] * scaler;
  return out;
}

export function distanceBetweenVec2D(vecA: Vec2D, vecB: Vec2D): number {
  const x = vecB[0] - vecA[0];
  const y = vecB[1] - vecA[1];
  return Math.sqrt(x * x + y * y);
}

export function distanceBetweenVec2DSquared(vecA: Vec2D, vecB: Vec2D): number {
  const x = vecB[0] - vecA[0];
  const y = vecB[1] - vecA[1];
  return x * x + y * y;
}

export function lengthVec2D(vec: Vec2D): number {
  const x = vec[0];
  const y = vec[1];
  return Math.sqrt(x * x + y * y);
}

export function lengthVec2DSquared(vec: Vec2D): number {
  const x = vec[0];
  const y = vec[1];
  return x * x + y * y;
}

export function negateVec2D(out: Vec2D, vec: Vec2D): Vec2D {
  out[0] = -vec[0];
  out[1] = -vec[1];
  return out;
}

export function inverseVec2D(out: Vec2D, vec: Vec2D): Vec2D {
  out[0] = 1.0 / vec[0];
  out[1] = 1.0 / vec[1];
  return out;
}

export function normalizeVec2D(out: Vec2D, vec: Vec2D): Vec2D {
  const x = vec[0];
  const y = vec[1];
  let length = x * x + y * y;
  if (length > 0) {
    length = 1 / Math.sqrt(length);
  }
  out[0] = vec[0] * length;
  out[1] = vec[1] * length;
  return out;
}

export function dotVec2D(vecA: Vec2D, vecB: Vec2D): number {
  return vecA[0] * vecB[0] + vecA[1] * vecB[1];
}

// export function crossVec2D

export function lerpVec2D(
  out: Vec2D,
  vecA: Vec2D,
  vecB: Vec2D,
  i: number
): Vec2D {
  const ax = vecA[0];
  const ay = vecA[1];
  out[0] = ax + i * (vecB[0] - ax);
  out[1] = ay + i * (vecB[1] - ay);
  return out;
}

export function randomVec2D(out: Vec2D, scale?: number): Vec2D {
  scale = scale === undefined ? 1.0 : scale;
  const rand = Math.random() * 2.0;
  out[0] = Math.cos(rand) * scale;
  out[1] = Math.sin(rand) * scale;
  return out;
}

export function rotateVec2D(
  out: Vec2D,
  vec: Vec2D,
  origin: Vec2D,
  radians: number
): Vec2D {
  const p0 = vec[0] - origin[0];
  const p1 = vec[1] - origin[1];
  const sinC = Math.sin(radians);
  const cosC = Math.cos(radians);

  out[0] = p0 * cosC - p1 * sinC + origin[0];
  out[1] = p0 * sinC + p1 * cosC + origin[1];

  return out;
}

export function angleVec2D(vecA: Vec2D, vecB: Vec2D): number {
  const ax = vecA[0];
  const bx = vecB[0];
  const ay = vecA[1];
  const by = vecB[1];
  const magnitude = Math.sqrt((ax * ax + ay * ay) * (bx * bx + by * by));
  const cosine = magnitude && (ax * bx + ay * by) / magnitude;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}

export function zeroVec2D(out: Vec2D): Vec2D {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}

export function vec2DtoString(vec: Vec2D): string {
  return `vec2D(${vec[0]}, ${vec[1]})`;
}

export function equalsVec2D(vecA: Vec2D, vecB: Vec2D): boolean {
  return vecA[0] === vecB[0] && vecA[1] === vecB[1];
}

export function approximatesVec2D(vecA: Vec2D, vecB: Vec2D): boolean {
  const ax = vecA[0];
  const ay = vecA[1];
  const bx = vecB[0];
  const by = vecB[1];
  return approximates(ax, bx) && approximates(ay, by);
}
