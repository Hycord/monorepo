// src/constants.ts
var EPSILON = 1e-6;
var DEGREE = Math.PI / 180;
var MAX_SAFE_INTEGER = 999999999;

// src/basic.ts
function mean(numbers) {
  const sum2 = numbers.reduce((acc, num) => acc + num, 0);
  return sum2 / numbers.length;
}
function median(numbers) {
  const sorted = numbers.sort((a, b) => a - b);
  const middleIndex = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  } else {
    return sorted[middleIndex];
  }
}
function mode(numbers) {
  const counts = /* @__PURE__ */ new Map();
  numbers.forEach((num) => {
    counts.set(num, (counts.get(num) || 0) + 1);
  });
  let maxCount = 0;
  let modeNum = 0;
  counts.forEach((count, num) => {
    if (count > maxCount) {
      maxCount = count;
      modeNum = num;
    }
  });
  return modeNum;
}
function sum(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
function min(numbers) {
  return Math.min(...numbers);
}
function max(numbers) {
  return Math.max(...numbers);
}
function range(numbers) {
  return max(numbers) - min(numbers);
}
function variance(numbers) {
  const meanValue = mean(numbers);
  const squaredDifferences = numbers.map((num) => Math.pow(num - meanValue, 2));
  return mean(squaredDifferences);
}
function standardDeviation(numbers) {
  return Math.sqrt(variance(numbers));
}
function geometricMean(numbers) {
  const product = numbers.reduce((acc, num) => acc * num, 1);
  return Math.pow(product, 1 / numbers.length);
}
function harmonicMean(numbers) {
  const reciprocalSum = numbers.reduce((acc, num) => acc + 1 / num, 0);
  return numbers.length / reciprocalSum;
}
function degreeToRadian(deg) {
  return deg * DEGREE;
}
function approximates(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1, Math.abs(a), Math.abs(b));
}
function generateRandomNormal(size) {
  const randomNumbers = [];
  for (let i = 0; i < size; i++) {
    let u = 0, v = 0;
    while (u === 0)
      u = Math.random();
    while (v === 0)
      v = Math.random();
    const rand = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    randomNumbers.push(rand);
  }
  return randomNumbers;
}
function groupArrayByLength(arr, groupSize) {
  const groupedArray = [];
  const numGroups = Math.ceil(arr.length / groupSize);
  for (let i = 0; i < numGroups; i++) {
    groupedArray.push(arr.slice(i * groupSize, (i + 1) * groupSize));
  }
  return groupedArray;
}
function random(minOrMax, max2) {
  let min2;
  let maxGenerated;
  if (max2 === void 0) {
    min2 = 0;
    maxGenerated = minOrMax;
  } else {
    min2 = minOrMax;
    maxGenerated = max2;
  }
  return Math.random() * (maxGenerated - min2) + min2;
}
function randomInt(minOrMax, max2) {
  return Math.floor(random(minOrMax, max2));
}
function lerp(min2, max2, i) {
  return (min2 + (max2 - min2)) * i;
}
function probabilityToBoolean(p) {
  return p > 0.5;
}

// src/geometry/Point.ts
var Point = class _Point {
  _value;
  constructor({ x, y }) {
    this._value = Vector2D.fromValues(x, y);
  }
  distanceTo(point) {
    return this._value.distanceBetween(point._value);
  }
  equals(point) {
    return this._value.equals(point._value);
  }
  dot(point) {
    return this._value.dot(point._value);
  }
  subtract(point) {
    return _Point.fromVector2D(this._value.subtract(point._value));
  }
  normalize() {
    return _Point.fromVector2D(this._value.normalize());
  }
  add(point) {
    return _Point.fromVector2D(this._value.add(point._value));
  }
  scale(scaler) {
    return _Point.fromVector2D(this._value.scale(scaler));
  }
  average(point) {
    return new _Point({ x: (this.x + point.x) / 2, y: (this.y + point.y) / 2 });
  }
  clone() {
    return new _Point({
      x: this._value.x,
      y: this._value.y
    });
  }
  get x() {
    return this._value.x;
  }
  get y() {
    return this._value.y;
  }
  set x(value) {
    this._value.set(value, this._value.y);
  }
  set y(value) {
    this._value.set(this._value.x, value);
  }
  static fromVector2D(vector2D) {
    return new _Point({ x: vector2D.x, y: vector2D.y });
  }
};

// src/geometry/Polygon.ts
var Polygon = class _Polygon {
  _points;
  _segments;
  constructor(points) {
    this._points = points;
    this._segments = [];
    for (let i = 1; i < points.length; i++) {
      this._segments.push(new Segment([points[i - 1], points[i]]));
    }
    this._segments.push(new Segment([points[points.length - 1], points[0]]));
  }
  distanceToPoint(point) {
    return Math.min(...this._segments.map((s) => s.distanceToPoint(point)));
  }
  get points() {
    return this._points.map((p) => p.clone());
  }
  get segments() {
    return this._segments;
  }
  containsSegmentMidpoint(segment) {
    const midpoint = segment.startPoint.clone().average(segment.endPoint);
    return this.containsPoint(midpoint);
  }
  distanceToPolygon(polygon) {
    return Math.min(...this._points.map((p) => polygon.distanceToPoint(p)));
  }
  intersectsSegment(segment) {
    for (const seg of this._segments) {
      const intersection = seg.getIntersection(segment);
      if (intersection)
        return true;
    }
    return false;
  }
  intersectsPolygon(polygon) {
    for (const thisSegment of this._segments) {
      for (const polySegment of polygon._segments) {
        const intersection = thisSegment.getIntersection(polySegment);
        if (intersection)
          return true;
      }
    }
    return false;
  }
  containsPoint(point) {
    const outerPoint = new Point({
      x: -MAX_SAFE_INTEGER,
      y: -MAX_SAFE_INTEGER
    });
    let intersectionCount = 0;
    for (const segment of this._segments) {
      const intersection = segment.getIntersection(
        new Segment([outerPoint, point])
      );
      if (intersection)
        intersectionCount++;
    }
    return intersectionCount % 2 == 1;
  }
  static union(polygons) {
    _Polygon.multiBreak(polygons);
    const keptSegments = [];
    for (let i = 0; i < polygons.length; i++) {
      for (const segment of polygons[i]._segments) {
        let keep = true;
        for (let j = 0; j < polygons.length; j++) {
          if (i != j) {
            if (polygons[i].containsSegmentMidpoint(segment)) {
              keep = false;
              break;
            }
          }
        }
        if (keep) {
          keptSegments.push(segment);
        }
      }
    }
    return keptSegments;
  }
  static multiBreak(polygons) {
    if (polygons.length < 2)
      return;
    for (let i = 0; i < polygons.length - 1; i++) {
      for (let j = i + 1; j < polygons.length; j++) {
        _Polygon.break(polygons[i], polygons[j]);
      }
    }
  }
  static break(polygon1, polygon2) {
    for (let i = 0; i < polygon2._segments.length; i++) {
      for (let j = 0; j < polygon1._segments.length; j++) {
        const intersection = polygon2._segments[i]?.getIntersection(
          polygon1._segments[j]
        );
        if (intersection && intersection.offset != 1 && intersection.offset != 0) {
          const point = intersection.point.clone();
          let aux = polygon2._segments[i].endPoint;
          polygon2._segments[i].endPoint = point;
          polygon2._segments.splice(i + 1, 0, new Segment([point, aux]));
          aux = polygon1._segments[j].endPoint;
          polygon1._segments[j].endPoint = point;
          polygon1._segments.splice(j + 1, 0, new Segment([point, aux]));
        }
      }
    }
  }
};

// src/geometry/Segment.ts
var Segment = class {
  _points;
  constructor(points) {
    this._points = points;
  }
  get length() {
    return this._points[0].distanceTo(this._points[1]);
  }
  contains(point) {
    return this._points[0].equals(point) || this._points[1].equals(point);
  }
  get startPoint() {
    return this._points[0].clone();
  }
  get endPoint() {
    return this._points[1].clone();
  }
  set startPoint(point) {
    this._points[0] = point.clone();
  }
  set endPoint(point) {
    this._points[1] = point.clone();
  }
  get direction() {
    const dir = this._points[0].clone().subtract(this._points[1]);
    return dir.normalize();
  }
  projectPoint(point) {
    const epsilon = 10;
    const startToPoint = point.clone().subtract(this._points[0]);
    const seg = this._points[1].clone().subtract(this._points[0]);
    if (this.length < epsilon) {
      return {
        point: this._points[0],
        offset: 0
      };
    }
    const normSeg = seg.clone().normalize();
    const scaler = startToPoint.dot(normSeg);
    const projection = {
      point: this._points[0].clone().add(normSeg.clone().scale(scaler)),
      offset: scaler / this.length
    };
    return projection;
  }
  distanceToPoint(point) {
    const projection = this.projectPoint(point);
    if (projection.offset > -EPSILON && projection.offset < 1 + EPSILON) {
      return point.distanceTo(projection.point);
    }
    const distanceFromStartPoint = point.distanceTo(this._points[0]);
    const distanceFromEndPoint = point.distanceTo(this._points[1]);
    return Math.min(distanceFromStartPoint, distanceFromEndPoint);
  }
  getIntersection(segment) {
    const tTop = (segment._points[1].x - segment._points[0].x) * (this._points[0].y - segment._points[0].y) - (segment._points[1].y - segment._points[0].y) * (this._points[0].x - segment._points[0].x);
    const uTop = (segment._points[0].y - this._points[0].y) * (this._points[0].x - this._points[1].x) - (segment._points[0].x - this._points[0].x) * (this._points[0].y - this._points[1].y);
    const bottom = (segment._points[1].y - segment._points[0].y) * (this._points[1].x - this._points[0].x) - (segment._points[1].x - segment._points[0].x) * (this._points[1].y - this._points[0].y);
    const eps = 1e-3;
    if (Math.abs(bottom) > eps) {
      const t = tTop / bottom;
      const u = uTop / bottom;
      if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
        const x = lerp(this._points[0].x, this._points[1].x, t);
        const y = lerp(this._points[0].y, this._points[1].y, t);
        return {
          point: new Point({ x, y }),
          offset: t
        };
      }
    }
    return null;
  }
};

// src/vector/2d/Vector2D.ts
import util from "util";

// src/vector/2d/Vec2DUtils.ts
function createVec2D() {
  const out = new Array(2);
  out[0] = 0;
  out[1] = 0;
  return out;
}
function copyVec2DInPlace(out, existing) {
  out[0] = existing[0];
  out[1] = existing[1];
  return out;
}
function setVec2D(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
function addVec2D(out, vecA, vecB) {
  out[0] = vecA[0] + vecB[0];
  out[1] = vecA[1] + vecB[1];
  return out;
}
function subtractVec2D(out, vecA, vecB) {
  out[0] = vecA[0] - vecB[0];
  out[1] = vecA[1] - vecB[1];
  return out;
}
function multiplyVec2D(out, vecA, vecB) {
  out[0] = vecA[0] * vecB[1];
  out[1] = vecA[1] * vecB[1];
  return out;
}
function divideVec2d(out, vecA, vecB) {
  out[0] = vecA[0] / vecB[1];
  out[1] = vecA[1] / vecB[1];
  return out;
}
function ceilVec2D(out, vec) {
  out[0] = Math.ceil(vec[0]);
  out[1] = Math.ceil(vec[1]);
  return out;
}
function floorVec2D(out, vec) {
  out[0] = Math.floor(vec[0]);
  out[1] = Math.floor(vec[1]);
  return out;
}
function minVec2D(out, vecA, vecB) {
  out[0] = Math.min(vecA[0], vecB[0]);
  out[1] = Math.min(vecA[1], vecB[1]);
  return out;
}
function maxVec2D(out, vecA, vecB) {
  out[0] = Math.max(vecA[0], vecB[0]);
  out[1] = Math.max(vecA[1], vecB[1]);
  return out;
}
function roundVec2D(out, vec) {
  out[0] = Math.round(vec[0]);
  out[1] = Math.round(vec[1]);
  return out;
}
function scaleVec2D(out, vecA, scaler) {
  out[0] = vecA[0] * scaler;
  out[1] = vecA[1] * scaler;
  return out;
}
function addThenScaleVec2D(out, vecA, vecB, scaler) {
  out[0] = vecA[0] * vecB[1] * scaler;
  out[1] = vecA[1] * vecB[1] * scaler;
  return out;
}
function distanceBetweenVec2D(vecA, vecB) {
  const x = vecB[0] - vecA[0];
  const y = vecB[1] - vecA[1];
  return Math.sqrt(x * x + y * y);
}
function distanceBetweenVec2DSquared(vecA, vecB) {
  const x = vecB[0] - vecA[0];
  const y = vecB[1] - vecA[1];
  return x * x + y * y;
}
function lengthVec2D(vec) {
  const x = vec[0];
  const y = vec[1];
  return Math.sqrt(x * x + y * y);
}
function lengthVec2DSquared(vec) {
  const x = vec[0];
  const y = vec[1];
  return x * x + y * y;
}
function negateVec2D(out, vec) {
  out[0] = -vec[0];
  out[1] = -vec[1];
  return out;
}
function inverseVec2D(out, vec) {
  out[0] = 1 / vec[0];
  out[1] = 1 / vec[1];
  return out;
}
function normalizeVec2D(out, vec) {
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
function dotVec2D(vecA, vecB) {
  return vecA[0] * vecB[0] + vecA[1] * vecB[1];
}
function lerpVec2D(out, vecA, vecB, i) {
  const ax = vecA[0];
  const ay = vecA[1];
  out[0] = ax + i * (vecB[0] - ax);
  out[1] = ay + i * (vecB[1] - ay);
  return out;
}
function randomVec2D(out, scale) {
  scale = scale === void 0 ? 1 : scale;
  const rand = Math.random() * 2;
  out[0] = Math.cos(rand) * scale;
  out[1] = Math.sin(rand) * scale;
  return out;
}
function rotateVec2D(out, vec, origin, radians) {
  const p0 = vec[0] - origin[0];
  const p1 = vec[1] - origin[1];
  const sinC = Math.sin(radians);
  const cosC = Math.cos(radians);
  out[0] = p0 * cosC - p1 * sinC + origin[0];
  out[1] = p0 * sinC + p1 * cosC + origin[1];
  return out;
}
function angleVec2D(vecA, vecB) {
  const ax = vecA[0];
  const bx = vecB[0];
  const ay = vecA[1];
  const by = vecB[1];
  const magnitude = Math.sqrt((ax * ax + ay * ay) * (bx * bx + by * by));
  const cosine = magnitude && (ax * bx + ay * by) / magnitude;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function zeroVec2D(out) {
  out[0] = 0;
  out[1] = 0;
  return out;
}
function equalsVec2D(vecA, vecB) {
  return vecA[0] === vecB[0] && vecA[1] === vecB[1];
}
function approximatesVec2D(vecA, vecB) {
  const ax = vecA[0];
  const ay = vecA[1];
  const bx = vecB[0];
  const by = vecB[1];
  return approximates(ax, bx) && approximates(ay, by);
}

// src/vector/2d/Vector2D.ts
var Vector2D = class _Vector2D {
  value;
  constructor(x = 0, y = 0) {
    this.value = createVec2D();
    this.set(x, y);
  }
  [util.inspect.custom]() {
    return this.toString();
  }
  toString() {
    return `Vector2D ( ${this.x.toLocaleString()}, ${this.y.toLocaleString()} )`;
  }
  get x() {
    return this.value[0];
  }
  get y() {
    return this.value[1];
  }
  static random(scale) {
    const value = randomVec2D(createVec2D(), scale);
    return new _Vector2D(value[0], value[1]);
  }
  static create() {
    const vec = createVec2D();
    return new _Vector2D(vec[0], vec[1]);
  }
  static fromValues(x, y) {
    return new _Vector2D(x, y);
  }
  static randomUnit() {
    const x = Math.random() * 2 - 1;
    const y = Math.random() * 2 - 1;
    const vec = _Vector2D.fromValues(x, y);
    return vec.normalize();
  }
  distanceBetween(vec) {
    return distanceBetweenVec2D(this.value, vec.value);
  }
  distanceBetweenSquared(vec) {
    return distanceBetweenVec2DSquared(this.value, vec.value);
  }
  length() {
    return lengthVec2D(this.value);
  }
  lengthSquared() {
    return lengthVec2DSquared(this.value);
  }
  dot(vec) {
    return dotVec2D(this.value, vec.value);
  }
  equals(vec) {
    return equalsVec2D(this.value, vec.value);
  }
  approximates(vec) {
    return approximatesVec2D(this.value, vec.value);
  }
  clone() {
    return new _Vector2D(this.value[0], this.value[1]);
  }
  copyInPlace(existing) {
    this.value = copyVec2DInPlace(this.value, existing.value);
    return this;
  }
  set(x, y) {
    this.value = setVec2D(this.value, x, y);
    return this;
  }
  add(vec) {
    this.value = addVec2D(this.value, this.value, vec.value);
    return this;
  }
  subtract(vec) {
    this.value = subtractVec2D(this.value, this.value, vec.value);
    return this;
  }
  multiply(vec) {
    this.value = multiplyVec2D(this.value, this.value, vec.value);
    return this;
  }
  divide(vec) {
    this.value = divideVec2d(this.value, this.value, vec.value);
    return this;
  }
  ceil() {
    this.value = ceilVec2D(this.value, this.value);
    return this;
  }
  floor() {
    this.value = floorVec2D(this.value, this.value);
    return this;
  }
  min(vec) {
    this.value = minVec2D(this.value, this.value, vec.value);
    return this;
  }
  max(vec) {
    this.value = maxVec2D(this.value, this.value, vec.value);
    return this;
  }
  round() {
    this.value = roundVec2D(this.value, this.value);
    return this;
  }
  scale(scaler) {
    this.value = scaleVec2D(this.value, this.value, scaler);
    return this;
  }
  addThenScale(vec, scaler) {
    this.value = addThenScaleVec2D(this.value, this.value, vec.value, scaler);
    return this;
  }
  negate() {
    this.value = negateVec2D(this.value, this.value);
    return this;
  }
  inverse() {
    this.value = inverseVec2D(this.value, this.value);
    return this;
  }
  normalize() {
    this.value = normalizeVec2D(this.value, this.value);
    return this;
  }
  lerp(vec, i) {
    this.value = lerpVec2D(this.value, this.value, vec.value, i);
    return this;
  }
  rotate(origin, radians) {
    this.value = rotateVec2D(this.value, this.value, origin.value, radians);
    return this;
  }
  angle(vec) {
    return angleVec2D(this.value, vec.value);
  }
  zero() {
    this.value = zeroVec2D(this.value);
    return this;
  }
};

// src/vector/matrix/matrix.ts
import * as util2 from "util";
var Matrix = class _Matrix {
  _rows;
  _cols;
  _data;
  get rows() {
    return this._rows;
  }
  get cols() {
    return this._cols;
  }
  constructor(rows, cols, initial) {
    if (rows <= 0 || cols <= 0) {
      throw new Error("Invalid matrix dimensions");
    }
    this._rows = rows;
    this._cols = cols;
    this._data = initial ? initial instanceof _Matrix ? initial._data : initial.flat().slice(0, rows * cols) : new Array(rows * cols).fill(0);
  }
  get data() {
    return [...this._data];
  }
  getIndex(row, col) {
    if (row < 0 || row >= this._rows || col < 0 || col >= this._cols) {
      throw new Error("Index out of bounds");
    }
    return row * this._cols + col;
  }
  get(row, col) {
    const index = this.getIndex(row, col);
    return this._data[index];
  }
  set(row, col, value) {
    const index = this.getIndex(row, col);
    this._data[index] = value;
  }
  get size() {
    return this._cols * this._rows;
  }
  fill(val) {
    for (let i = 0; i < this.size; i++) {
      const value = typeof val === "function" ? val(i) : val;
      this._data[i] = value;
    }
    return this;
  }
  [util2.inspect.custom]() {
    return this.toString();
  }
  toString() {
    let str = `Matrix (${this._rows}x${this._cols})
`;
    str += util2.inspect(this.toNestedArray());
    return str;
  }
  *[Symbol.iterator]() {
    for (let i = 0; i < this._rows; i++) {
      const rowData = this._data.slice(i * this._cols, (i + 1) * this._cols);
      yield new _Matrix(1, this._cols, rowData);
    }
  }
  toNestedArray() {
    let data = new Array(this._rows);
    let index = 0;
    for (let i = 0; i < this._rows; i++) {
      data[i] = new Array(this._cols);
      for (let j = 0; j < this._cols; j++) {
        data[i][j] = this._data[index++];
      }
    }
    return data;
  }
  transpose() {
    return new _Matrix(this._cols, this._rows, this._data);
    return this;
  }
  map(callback) {
    return new _Matrix(this._rows, this._cols, this._data.map(callback));
  }
  reduce(callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.size; i++) {
      accumulator = callback(accumulator, this._data[i]);
    }
    return accumulator;
  }
  add(matrix) {
    if (this._rows !== matrix.rows || this._cols !== matrix.cols) {
      throw new Error("Matrix dimensions must be equal for addition");
    }
    const result = new _Matrix(this._rows, this._cols);
    for (let i = 0; i < this._rows; i++) {
      for (let j = 0; j < this._cols; j++) {
        result.set(i, j, this.get(i, j) + matrix.get(i, j));
      }
    }
    return result;
  }
  get C() {
    return new _Matrix(this._rows, this._cols, this);
  }
  scalarMultiply(scalar) {
    const result = new _Matrix(
      this._rows,
      this._cols,
      this._data.map((d) => d * scalar)
    );
    return result;
  }
  dotProduct(matrix) {
    if (this.cols != matrix.rows) {
      throw new Error(
        `Matrix dimensions incompatible for dot product(${this.cols},${matrix.rows})`
      );
    }
    const result = new _Matrix(this._rows, matrix.cols);
    for (let i = 0; i < this._rows; i++) {
      for (let j = 0; j < matrix.cols; j++) {
        let sum2 = this.get(i, 0) * matrix.get(0, j);
        for (let k = 1; k < this._cols; k++) {
          sum2 = sum2 + this.get(i, k) * matrix.get(k, j);
        }
        result.set(i, j, sum2);
      }
    }
    return result;
  }
  reshape(rows, cols) {
    if (rows * cols !== this._rows * this._cols) {
      throw new Error(
        "Total number of elements must remain unchanged during reshaping"
      );
    }
    const result = new _Matrix(rows, cols);
    let k = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        result.set(i, j, this._data[k]);
        k++;
      }
    }
    return result;
  }
  subtract(matrix) {
    if (this._rows !== matrix.rows || this._cols !== matrix.cols) {
      throw new Error("Matrix dimensions must be equal for subtraction");
    }
    return this.map((a, i) => a - matrix._data[i]);
  }
  static randomNormal(rows, cols) {
    const data = [];
    for (let i = 0; i < rows * cols; i++) {
      let u = 0, v = 0;
      while (u === 0)
        u = Math.random();
      while (v === 0)
        v = Math.random();
      const rand = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
      data.push(rand);
    }
    return new _Matrix(rows, cols, data);
  }
  indexToRowCol(index) {
    if (index < 0 || index >= this._rows * this._cols) {
      throw new Error("Index out of bounds");
    }
    const row = Math.floor(index / this._cols);
    const col = index % this._cols;
    return { row, col };
  }
};
export {
  DEGREE,
  EPSILON,
  MAX_SAFE_INTEGER,
  Matrix,
  Point,
  Polygon,
  Segment,
  Vector2D,
  approximates,
  degreeToRadian,
  generateRandomNormal,
  geometricMean,
  groupArrayByLength,
  harmonicMean,
  lerp,
  max,
  mean,
  median,
  min,
  mode,
  probabilityToBoolean,
  random,
  randomInt,
  range,
  standardDeviation,
  sum,
  variance
};
