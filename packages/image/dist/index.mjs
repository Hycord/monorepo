// src/Viewport.ts
import { Vector2D } from "@hycord/math";
import { createCanvas } from "@napi-rs/canvas";
var Viewport = class {
  _canvas;
  _width;
  _height;
  _ctx;
  _zoom;
  _center;
  _backgroundColor;
  _step;
  constructor({
    height,
    width,
    backgroundColor
  }) {
    this._backgroundColor = backgroundColor;
    this._width = width;
    this._height = height;
    this._step = Math.floor(Math.min(width, height) / 16);
    this._canvas = createCanvas(this._width, this._height);
    this._ctx = this._canvas.getContext("2d");
    this._zoom = 1;
    this._center = new Vector2D(this._width / 2, this._height / 2);
    this.updateView();
    this.fillBackground();
  }
  fillBackground() {
    if (this._backgroundColor)
      this.shape((ctx) => {
        ctx.fillStyle = this._backgroundColor;
        ctx.fillRect(0, 0, this._width, this._height);
      });
  }
  updateView() {
    this._ctx.setTransform(1, 0, 0, 1, 0, 0);
    this._ctx.clearRect(0, 0, this._width, this._height);
    this.fillBackground();
    const translateX = this._width / 2 - this._center.x * this._zoom;
    const translateY = this._height / 2 - this._center.y * this._zoom;
    this._ctx.translate(translateX, translateY);
    this._ctx.scale(this._zoom, this._zoom);
  }
  clear() {
    this._ctx.clearRect(0, 0, this._width, this._height);
  }
  get canvas() {
    return this._canvas;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  // eslint-disable-next-line no-unused-vars
  async shape(draw) {
    this._ctx.save();
    draw(this._ctx);
    this._ctx.restore();
  }
  set center(newCenter) {
    this._center = newCenter;
    this.updateView();
  }
  get center() {
    return this._center;
  }
  set zoom(newZoom) {
    this._zoom = newZoom;
    this.updateView();
  }
  get zoom() {
    return this._zoom;
  }
  async render() {
    return await this._canvas.encode("png");
  }
  drawPoint(point, {
    fillColor = "rgba(244, 1, 126, 0.75)",
    lineWidth = this._step / 16,
    strokeColor = "orange",
    outline,
    radius = this._step / 2.75,
    text,
    textFillColor = "black",
    textStrokeColor = "black"
  } = {}) {
    this.shape((ctx) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = fillColor;
      ctx.fill();
      ctx.restore();
      if (outline) {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = strokeColor;
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
      if (text) {
        ctx.save();
        ctx.fillStyle = textFillColor;
        ctx.strokeStyle = textStrokeColor;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = `${radius * 1.5}px Arial`;
        ctx.fillText(text, point.x, point.y + radius * 0.1, radius * 1.9);
        ctx.lineWidth = 0.5;
        ctx.strokeText(text, point.x, point.y + radius * 0.1, radius * 1.9);
        ctx.restore();
      }
    });
  }
  drawSegment(segment, {
    lineWidth = this._step / 16,
    strokeColor = `rgba(245, 166, 35, 0.75)`
  } = {}) {
    this.shape((ctx) => {
      ctx.beginPath();
      ctx.moveTo(segment.startPoint.x, segment.startPoint.y);
      ctx.lineTo(segment.endPoint.x, segment.endPoint.y);
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    });
  }
  drawPolygon(polygon, {
    fillColor = "rgba(0,0,255,0.3)",
    lineWidth = this._step / 16
  } = {}) {
    if (polygon.points.length < 3)
      return;
    this.shape((ctx) => {
      ctx.beginPath();
      if (fillColor)
        ctx.fillStyle = fillColor;
      if (lineWidth)
        ctx.lineWidth = lineWidth;
      ctx.lineJoin = "miter";
      ctx.moveTo(polygon.points[0].x, polygon.points[0].y);
      for (let i = 0; i < polygon.points.length; i++) {
        ctx.lineTo(polygon.points[i].x, polygon.points[i].y);
      }
      ctx.closePath();
      ctx.fill();
    });
  }
};
export {
  Viewport
};
