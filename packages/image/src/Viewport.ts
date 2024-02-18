import { Point, Polygon, Segment, Vector2D } from '@hycord/math';
import { Canvas, createCanvas } from '@napi-rs/canvas';
import { SKRSContext2D } from './napi-rs';

type DrawConfiguration = {
  fillColor?: string;
  strokeColor?: string;
  textFillColor?: string;
  textStrokeColor?: string;
  lineWidth?: number;
  radius?: number;
  outline?: boolean;
  text?: string;
};

export class Viewport {
  private _canvas: Canvas;
  private _width: number;
  private _height: number;
  private _ctx: SKRSContext2D;
  private _zoom: number;
  private _center: Vector2D;
  private _backgroundColor?: string;
  private _step: number;

  constructor({
    height,
    width,
    backgroundColor,
  }: {
    width: number;
    height: number;
    backgroundColor?: string;
  }) {
    this._backgroundColor = backgroundColor;
    this._width = width;
    this._height = height;
    this._step = Math.floor(Math.min(width, height) / 16);
    this._canvas = createCanvas(this._width, this._height);
    this._ctx = this._canvas.getContext('2d') as unknown as SKRSContext2D; // Had to write a custom type for this.

    this._zoom = 1;
    this._center = new Vector2D(this._width / 2, this._height / 2);

    this.updateView();
    this.fillBackground();
  }

  private fillBackground() {
    if (this._backgroundColor)
      this.shape((ctx) => {
        ctx.fillStyle = this._backgroundColor!;
        ctx.fillRect(0, 0, this._width, this._height);
      });
  }

  updateView() {
    // This will tell the view to respect the zoom and offset
    this._ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
    this._ctx.clearRect(0, 0, this._width, this._height); // Clear canvas
    this.fillBackground();

    // Calculate translation to center the view
    const translateX = this._width / 2 - this._center.x * this._zoom;
    const translateY = this._height / 2 - this._center.y * this._zoom;

    // Apply translation and zoom
    this._ctx.translate(translateX, translateY);
    this._ctx.scale(this._zoom, this._zoom);
  }

  public clear() {
    this._ctx.clearRect(0, 0, this._width, this._height);
  }

  public get canvas(): Canvas {
    return this._canvas;
  }

  public get width(): number {
    return this._width;
  }

  public get height(): number {
    return this._height;
  }

  // eslint-disable-next-line no-unused-vars
  async shape(draw: (ctx: SKRSContext2D) => void) {
    this._ctx.save();
    draw(this._ctx);
    this._ctx.restore();
  }

  set center(newCenter: Vector2D) {
    this._center = newCenter;
    this.updateView();
  }

  get center() {
    return this._center;
  }

  set zoom(newZoom: number) {
    this._zoom = newZoom;
    this.updateView();
  }

  get zoom() {
    return this._zoom;
  }

  async render() {
    return await this._canvas.encode('png');
  }

  public drawPoint(
    point: Point,
    {
      fillColor = 'rgba(244, 1, 126, 0.75)',
      lineWidth = this._step / 16,
      strokeColor = 'orange',
      outline,
      radius = this._step / 2.75,
      text,
      textFillColor = 'black',
      textStrokeColor = 'black',
    }: DrawConfiguration = {},
  ) {
    this.shape((ctx) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(point.x, point.y, radius!, 0, 2 * Math.PI);
      ctx.fillStyle = fillColor!;
      ctx.fill();
      ctx.restore();

      if (outline) {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = lineWidth!;
        ctx.strokeStyle = strokeColor!;
        // ctx.setLineDash(outlineDash);
        ctx.arc(point.x, point.y, radius!, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      if (text) {
        ctx.save();
        ctx.fillStyle = textFillColor!;
        ctx.strokeStyle = textStrokeColor!;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `${radius! * 1.5}px Arial`; // You can adjust the font size and style
        ctx.fillText(text, point.x, point.y + radius! * 0.1, radius! * 1.9);
        ctx.lineWidth = 0.5;
        ctx.strokeText(text, point.x, point.y + radius! * 0.1, radius! * 1.9);
        ctx.restore();
      }
    });
  }

  public drawSegment(
    segment: Segment,
    {
      lineWidth = this._step / 16,
      strokeColor = `rgba(245, 166, 35, 0.75)`,
    }: DrawConfiguration = {},
  ) {
    this.shape((ctx) => {
      ctx.beginPath();
      ctx.moveTo(segment.startPoint.x, segment.startPoint.y);
      ctx.lineTo(segment.endPoint.x, segment.endPoint.y);
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    });
  }

  public drawPolygon(
    polygon: Polygon,
    {
      fillColor = 'rgba(0,0,255,0.3)',
      lineWidth = this._step / 16,
    }: DrawConfiguration = {},
  ) {
    if (polygon.points.length < 3) return;

    this.shape((ctx) => {
      ctx.beginPath();
      if (fillColor) ctx.fillStyle = fillColor;
      if (lineWidth) ctx.lineWidth = lineWidth;
      ctx.lineJoin = 'miter';
      ctx.moveTo(polygon.points[0]!.x, polygon.points[0]!.y);
      for (let i = 0; i < polygon.points.length; i++) {
        ctx.lineTo(polygon.points[i]!.x, polygon.points[i]!.y);
      }

      ctx.closePath();
      ctx.fill();
    });
  }
}
