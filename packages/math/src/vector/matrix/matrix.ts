import * as util from "util";

export class Matrix {
  private readonly _rows: number;
  private readonly _cols: number;
  private readonly _data: number[];

  public get rows() {
    return this._rows;
  }

  public get cols() {
    return this._cols;
  }

  constructor(
    rows: number,
    cols: number,
    initial?: number[] | number[][] | Matrix
  ) {
    // Validate input
    if (rows <= 0 || cols <= 0) {
      throw new Error("Invalid matrix dimensions");
    }

    // Initialize matrix dimensions
    this._rows = rows;
    this._cols = cols;

    // Initialize data array with pre-allocated size
    this._data = initial
      ? initial instanceof Matrix
        ? initial._data
        : initial.flat().slice(0, rows * cols)
      : new Array(rows * cols).fill(0);
  }

  public get data() {
    return [...this._data];
  }

  private getIndex(row: number, col: number): number {
    if (row < 0 || row >= this._rows || col < 0 || col >= this._cols) {
      throw new Error("Index out of bounds");
    }
    return row * this._cols + col;
  }

  get(row: number, col: number): number {
    const index = this.getIndex(row, col);
    return this._data[index]!;
  }

  set(row: number, col: number, value: number): void {
    const index = this.getIndex(row, col);
    this._data[index] = value;
  }

  get size() {
    return this._cols * this._rows;
  }

  fill(val: number | ((i: number) => number)) {
    for (let i = 0; i < this.size; i++) {
      const value = typeof val === "function" ? val(i) : val;
      this._data[i] = value;
    }
    return this;
  }

  [util.inspect.custom]() {
    return this.toString();
  }

  toString() {
    let str = `Matrix (${this._rows}x${this._cols})\n`;

    str += util.inspect(this.toNestedArray());
    return str;
  }
  *[Symbol.iterator]() {
    for (let i = 0; i < this._rows; i++) {
      // Extract the current row as a 1xcols Matrix
      const rowData = this._data.slice(i * this._cols, (i + 1) * this._cols);
      yield new Matrix(1, this._cols, rowData);
    }
  }

  toNestedArray(): number[][] {
    let data: number[][] = new Array(this._rows);

    let index = 0;
    for (let i = 0; i < this._rows; i++) {
      data[i] = new Array(this._cols);
      for (let j = 0; j < this._cols; j++) {
        data[i]![j] = this._data[index++]!;
      }
    }

    return data;
  }

  transpose(): Matrix {
    return new Matrix(this._cols, this._rows, this._data);
    return this;
  }

  map(callback: (currentValue: number, index: number) => number) {
    return new Matrix(this._rows, this._cols, this._data.map(callback));
  }

  reduce(
    callback: (accumulator: number, currentValue: number) => number,
    initialValue: number
  ): number {
    let accumulator = initialValue;
    for (let i = 0; i < this.size; i++) {
      accumulator = callback(accumulator, this._data[i]!);
    }
    return accumulator;
  }

  add(matrix: Matrix): Matrix {
    if (this._rows !== matrix.rows || this._cols !== matrix.cols) {
      throw new Error("Matrix dimensions must be equal for addition");
    }

    const result = new Matrix(this._rows, this._cols);
    for (let i = 0; i < this._rows; i++) {
      for (let j = 0; j < this._cols; j++) {
        result.set(i, j, this.get(i, j) + matrix.get(i, j));
      }
    }
    return result;
  }

  get C() {
    return new Matrix(this._rows, this._cols, this);
  }

  scalarMultiply(scalar: number): Matrix {
    const result = new Matrix(
      this._rows,
      this._cols,
      this._data.map((d) => d * scalar)
    );
    return result;
  }

  dotProduct(matrix: Matrix): Matrix {
    if (this.cols != matrix.rows) {
      throw new Error(
        "Matrix dimensions incompatible for dot product" +
          `(${this.cols},${matrix.rows})`
      );
    }

    const result = new Matrix(this._rows, matrix.cols);
    for (let i = 0; i < this._rows; i++) {
      for (let j = 0; j < matrix.cols; j++) {
        let sum: number = this.get(i, 0) * matrix.get(0, j);
        for (let k = 1; k < this._cols; k++) {
          sum = sum + this.get(i, k) * matrix.get(k, j);
        }
        result.set(i, j, sum);
      }
    }
    return result;
  }

  reshape(rows: number, cols: number): Matrix {
    if (rows * cols !== this._rows * this._cols) {
      throw new Error(
        "Total number of elements must remain unchanged during reshaping"
      );
    }

    const result = new Matrix(rows, cols);
    let k = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        result.set(i, j, this._data[k]!);
        k++;
      }
    }
    return result;
  }

  subtract(matrix: Matrix): Matrix {
    if (this._rows !== matrix.rows || this._cols !== matrix.cols) {
      throw new Error("Matrix dimensions must be equal for subtraction");
    }

    return this.map((a: number, i: number) => a - matrix._data[i]!);
  }

  static randomNormal(rows: number, cols: number): Matrix {
    const data: number[] = [];
    for (let i = 0; i < rows * cols; i++) {
      let u = 0,
        v = 0;
      while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
      while (v === 0) v = Math.random();
      const rand = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
      data.push(rand);
    }
    return new Matrix(rows, cols, data);
  }

  indexToRowCol(index: number): { row: number; col: number } {
    if (index < 0 || index >= this._rows * this._cols) {
      throw new Error("Index out of bounds");
    }
    const row = Math.floor(index / this._cols);
    const col = index % this._cols;
    return { row, col };
  }
}
