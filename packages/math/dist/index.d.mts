import * as util from 'util';
import util__default from 'util';

declare function mean(numbers: number[]): number;
declare function median(numbers: number[]): number;
declare function mode(numbers: number[]): number;
declare function sum(numbers: number[]): number;
declare function min(numbers: number[]): number;
declare function max(numbers: number[]): number;
declare function range(numbers: number[]): number;
declare function variance(numbers: number[]): number;
declare function standardDeviation(numbers: number[]): number;
declare function geometricMean(numbers: number[]): number;
declare function harmonicMean(numbers: number[]): number;
declare function degreeToRadian(deg: number): number;
declare function approximates(a: number, b: number): boolean;
declare function generateRandomNormal(size: number): number[];
declare function groupArrayByLength<T>(arr: T[], groupSize: number): T[][];
declare function random(minOrMax: number, max?: number): number;
declare function randomInt(minOrMax: number, max?: number): number;
declare function lerp(min: number, max: number, i: number): number;
declare function probabilityToBoolean(p: number): boolean;

declare const EPSILON = 0.000001;
declare const DEGREE: number;
declare const MAX_SAFE_INTEGER = 999999999;

declare class Point {
    private _value;
    constructor({ x, y }: {
        x: number;
        y: number;
    });
    distanceTo(point: Point): number;
    equals(point: Point): boolean;
    dot(point: Point): number;
    subtract(point: Point): Point;
    normalize(): Point;
    add(point: Point): Point;
    scale(scaler: number): Point;
    average(point: Point): Point;
    clone(): Point;
    get x(): number;
    get y(): number;
    set x(value: number);
    set y(value: number);
    static fromVector2D(vector2D: Vector2D): Point;
}

declare class Polygon {
    private _points;
    private _segments;
    constructor(points: Point[]);
    distanceToPoint(point: Point): number;
    get points(): Point[];
    get segments(): Segment[];
    containsSegmentMidpoint(segment: Segment): boolean;
    distanceToPolygon(polygon: Polygon): number;
    intersectsSegment(segment: Segment): boolean;
    intersectsPolygon(polygon: Polygon): boolean;
    containsPoint(point: Point): boolean;
    static union(polygons: Polygon[]): Segment[];
    static multiBreak(polygons: Polygon[]): void;
    static break(polygon1: Polygon, polygon2: Polygon): void;
}

declare class Segment {
    private _points;
    constructor(points: [Point, Point]);
    get length(): number;
    contains(point: Point): boolean;
    get startPoint(): Point;
    get endPoint(): Point;
    set startPoint(point: Point);
    set endPoint(point: Point);
    get direction(): Point;
    projectPoint(point: Point): {
        point: Point;
        offset: number;
    };
    distanceToPoint(point: Point): number;
    getIntersection(segment: Segment): {
        point: Point;
        offset: number;
    } | null;
}

declare class Vector2D {
    private value;
    constructor(x?: number, y?: number);
    [util__default.inspect.custom](): string;
    toString(): string;
    get x(): number;
    get y(): number;
    static random(scale?: number): Vector2D;
    static create(): Vector2D;
    static fromValues(x: number, y: number): Vector2D;
    static randomUnit(): Vector2D;
    distanceBetween(vec: Vector2D): number;
    distanceBetweenSquared(vec: Vector2D): number;
    length(): number;
    lengthSquared(): number;
    dot(vec: Vector2D): number;
    equals(vec: Vector2D): boolean;
    approximates(vec: Vector2D): boolean;
    clone(): Vector2D;
    copyInPlace(existing: Vector2D): this;
    set(x: number, y: number): this;
    add(vec: Vector2D): this;
    subtract(vec: Vector2D): this;
    multiply(vec: Vector2D): this;
    divide(vec: Vector2D): this;
    ceil(): this;
    floor(): this;
    min(vec: Vector2D): this;
    max(vec: Vector2D): this;
    round(): this;
    scale(scaler: number): this;
    addThenScale(vec: Vector2D, scaler: number): this;
    negate(): this;
    inverse(): this;
    normalize(): this;
    lerp(vec: Vector2D, i: number): this;
    rotate(origin: Vector2D, radians: number): this;
    angle(vec: Vector2D): number;
    zero(): this;
}

declare class Matrix {
    private readonly _rows;
    private readonly _cols;
    private readonly _data;
    get rows(): number;
    get cols(): number;
    constructor(rows: number, cols: number, initial?: number[] | number[][] | Matrix);
    get data(): number[];
    private getIndex;
    get(row: number, col: number): number;
    set(row: number, col: number, value: number): void;
    get size(): number;
    fill(val: number | ((i: number) => number)): this;
    [util.inspect.custom](): string;
    toString(): string;
    [Symbol.iterator](): Generator<Matrix, void, unknown>;
    toNestedArray(): number[][];
    transpose(): Matrix;
    map(callback: (currentValue: number, index: number) => number): Matrix;
    reduce(callback: (accumulator: number, currentValue: number) => number, initialValue: number): number;
    add(matrix: Matrix): Matrix;
    get C(): Matrix;
    scalarMultiply(scalar: number): Matrix;
    dotProduct(matrix: Matrix): Matrix;
    reshape(rows: number, cols: number): Matrix;
    subtract(matrix: Matrix): Matrix;
    static randomNormal(rows: number, cols: number): Matrix;
    indexToRowCol(index: number): {
        row: number;
        col: number;
    };
}

export { DEGREE, EPSILON, MAX_SAFE_INTEGER, Matrix, Point, Polygon, Segment, Vector2D, approximates, degreeToRadian, generateRandomNormal, geometricMean, groupArrayByLength, harmonicMean, lerp, max, mean, median, min, mode, probabilityToBoolean, random, randomInt, range, standardDeviation, sum, variance };
