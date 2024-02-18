import {
  EPSILON,
  MAX_SAFE_INTEGER,
  Polygon as MPolygon,
  Segment as MSegment,
  Vector2D,
  lerp,
} from "@hycord/math";
import { Viewport } from "./viewport";

type BaseDrawConfig = {
  fillStyle?: string;
  strokeStyle?: string;
  lineWidth?: number;
};

const defaultBaseConfig: BaseDrawConfig = {
  fillStyle: "#52c7b3",
  strokeStyle: "#133a33",
  lineWidth: 2,
};

export type PointDrawConfig = BaseDrawConfig & {
  text?: string;
  radius?: number;
  textFill?: string;
  textStroke?: string;
  outline?: boolean;
};

const defaultPointConfig: PointDrawConfig = {
  ...defaultBaseConfig,
  radius: 8,
  textFill: "black",
  textStroke: "black",
  outline: false,
};

export class Point {
  private _value: Vector2D;

  constructor({ x, y }: { x: number; y: number }) {
    this._value = Vector2D.fromValues(x, y);
  }

  public distanceTo(point: Point) {
    return this._value.distanceBetween(point._value);
  }

  public angle(p?: Point) {
    if (!p) p = new Point({ x: 0, y: 0 });
    return p._value.angle(this._value);
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
    return this.addVector2D(point._value);
  }

  public addVector2D(vector: Vector2D) {
    return Point.fromVector2D(this._value.add(vector));
  }

  public lerp(point: Point, i: number) {
    return Point.fromVector2D(this._value.lerp(point._value, i));
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

  public magnitude() {
    return this._value.length();
  }

  public static fromVector2D(vector2D: Vector2D) {
    return new Point({ x: vector2D.x, y: vector2D.y });
  }

  public draw(
    view: Viewport,
    {
      fillStyle = defaultPointConfig.fillStyle!,
      lineWidth = defaultPointConfig.lineWidth!,
      radius = defaultPointConfig.radius!,
      strokeStyle = defaultPointConfig.strokeStyle!,
      textFill = defaultPointConfig.textFill!,
      textStroke = defaultPointConfig.textStroke!,
      outline = defaultPointConfig.outline!,
      text = defaultPointConfig.text,
    }: PointDrawConfig = {}
  ) {
    view.shape((ctx) => {
      ctx.beginPath();

      ctx.fillStyle = fillStyle;
      ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
      ctx.fill();
      if (outline) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
      if (text) {
        ctx.fillStyle = textFill;
        ctx.strokeStyle = textStroke;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = `${radius * 1.5}px Arial`;
        ctx.fillText(text, this.x, this.y + radius * 0.1, radius * 1.9);
        ctx.lineWidth = 0.5;
        ctx.strokeText(text, this.x, this.y + radius * 0.1, radius * 1.9);
      }
    });
  }
}

export class Segment {
  private _points: [Point, Point];

  constructor(points: [Point, Point]) {
    this._points = points;
  }

  public get length() {
    return this._points[0].distanceTo(this._points[1]);
  }

  public contains(point: Point) {
    return this._points[0].equals(point) || this._points[1].equals(point);
  }

  public get startPoint() {
    return this._points[0].clone();
  }

  public get endPoint() {
    return this._points[1].clone();
  }

  public set startPoint(point: Point) {
    this._points[0] = point.clone();
  }

  public set endPoint(point: Point) {
    this._points[1] = point.clone();
  }

  public get direction() {
    const dir = this._points[0].clone().subtract(this._points[1]);
    return dir.normalize();
  }

  public projectPoint(point: Point) {
    const epsilon = 10;
    const startToPoint = point.clone().subtract(this._points[0]);
    const seg = this._points[1].clone().subtract(this._points[0]);

    if (this.length < epsilon) {
      return {
        point: this._points[0],
        offset: 0,
      };
    }

    const normSeg = seg.clone().normalize();
    const scaler = startToPoint.dot(normSeg);
    const projection = {
      point: this._points[0].clone().add(normSeg.clone().scale(scaler)),
      offset: scaler / this.length,
    };
    return projection;
  }

  public distanceToPoint(point: Point) {
    const projection = this.projectPoint(point);
    if (projection.offset > -EPSILON && projection.offset < 1 + EPSILON) {
      return point.distanceTo(projection.point);
    }

    const distanceFromStartPoint = point.distanceTo(this._points[0]);
    const distanceFromEndPoint = point.distanceTo(this._points[1]);
    return Math.min(distanceFromStartPoint, distanceFromEndPoint);
  }

  public getIntersection(segment: Segment) {
    const tTop =
      (segment._points[1].x - segment._points[0].x) *
        (this._points[0].y - segment._points[0].y) -
      (segment._points[1].y - segment._points[0].y) *
        (this._points[0].x - segment._points[0].x);
    const uTop =
      (segment._points[0].y - this._points[0].y) *
        (this._points[0].x - this._points[1].x) -
      (segment._points[0].x - this._points[0].x) *
        (this._points[0].y - this._points[1].y);
    const bottom =
      (segment._points[1].y - segment._points[0].y) *
        (this._points[1].x - this._points[0].x) -
      (segment._points[1].x - segment._points[0].x) *
        (this._points[1].y - this._points[0].y);

    const eps = 0.001;
    if (Math.abs(bottom) > eps) {
      const t = tTop / bottom;
      const u = uTop / bottom;
      if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
        const x = lerp(this._points[0].x, this._points[1].x, t);
        const y = lerp(this._points[0].y, this._points[1].y, t);
        return {
          point: new Point({ x, y }),
          offset: t,
        };
      }
    }

    return null;
  }
  public draw(
    view: Viewport,
    {
      lineWidth = defaultBaseConfig.lineWidth!,
      strokeStyle = defaultBaseConfig.strokeStyle!,
    }: BaseDrawConfig = {}
  ) {
    view.shape((ctx) => {
      ctx.beginPath();
      ctx.moveTo(this.startPoint.x, this.startPoint.y);
      ctx.lineTo(this.endPoint.x, this.endPoint.y);
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    });
  }
}

export class Polygon {
  private _points: Point[];
  private _segments: Segment[];

  constructor(points: Point[]) {
    this._points = points;

    this._segments = [];

    for (let i = 1; i < points.length; i++) {
      this._segments.push(new Segment([points[i - 1]!, points[i]!]));
    }
    this._segments.push(new Segment([points[points.length - 1]!, points[0]!]));
  }

  public distanceToPoint(point: Point) {
    return Math.min(...this._segments.map((s) => s.distanceToPoint(point)));
  }

  public get points() {
    return this._points.map((p) => p.clone());
  }

  public get segments() {
    return this._segments;
  }

  public containsSegmentMidpoint(segment: Segment) {
    const midpoint = segment.startPoint.clone().average(segment.endPoint);
    return this.containsPoint(midpoint);
  }

  public distanceToPolygon(polygon: Polygon) {
    return Math.min(...this._points.map((p) => polygon.distanceToPoint(p)));
  }

  public intersectsSegment(segment: Segment) {
    for (const seg of this._segments) {
      const intersection = seg.getIntersection(segment);
      if (intersection) return true;
    }
    return false;
  }

  public intersectsPolygon(polygon: Polygon) {
    for (const thisSegment of this._segments) {
      for (const polySegment of polygon._segments) {
        const intersection = thisSegment.getIntersection(polySegment);
        if (intersection) return true;
      }
    }
    return false;
  }

  public containsPoint(point: Point) {
    const outerPoint = new Point({
      x: -MAX_SAFE_INTEGER,
      y: -MAX_SAFE_INTEGER,
    });

    let intersectionCount = 0;
    for (const segment of this._segments) {
      const intersection = segment.getIntersection(
        new Segment([outerPoint, point])
      );
      if (intersection) intersectionCount++;
    }

    return intersectionCount % 2 == 1;
  }

  static union(polygons: Polygon[]) {
    Polygon.multiBreak(polygons);
    const keptSegments = [];
    for (let i = 0; i < polygons.length; i++) {
      for (const segment of polygons[i]!._segments) {
        let keep = true;
        for (let j = 0; j < polygons.length; j++) {
          if (i != j) {
            if (polygons[i]!.containsSegmentMidpoint(segment)) {
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

  static multiBreak(polygons: Polygon[]) {
    if (polygons.length < 2) return;
    for (let i = 0; i < polygons.length - 1; i++) {
      for (let j = i + 1; j < polygons.length; j++) {
        Polygon.break(polygons[i]!, polygons[j]!);
      }
    }
  }

  static break(polygon1: Polygon, polygon2: Polygon) {
    for (let i = 0; i < polygon2._segments.length; i++) {
      for (let j = 0; j < polygon1._segments.length; j++) {
        const intersection = polygon2._segments[i]?.getIntersection(
          polygon1._segments[j]!
        );

        if (
          intersection &&
          intersection.offset != 1 &&
          intersection.offset != 0
        ) {
          const point = intersection.point.clone();
          let aux = polygon2._segments[i]!.endPoint;
          polygon2._segments[i]!.endPoint = point;
          polygon2._segments.splice(i + 1, 0, new Segment([point, aux]));
          aux = polygon1._segments[j]!.endPoint;
          polygon1._segments[j]!.endPoint = point;
          polygon1._segments.splice(j + 1, 0, new Segment([point, aux]));
        }
      }
    }
  }
  public draw(
    view: Viewport,

    {
      lineWidth = defaultBaseConfig.lineWidth!,
      fillStyle = defaultBaseConfig.fillStyle!,
    }: BaseDrawConfig = {}
  ) {
    if (this.points.length < 3) return;

    view.shape((ctx) => {
      ctx.beginPath();
      if (fillStyle) ctx.fillStyle = fillStyle;
      if (lineWidth) ctx.lineWidth = lineWidth;
      ctx.lineJoin = "miter";
      ctx.moveTo(this.points[0]!.x, this.points[0]!.y);
      for (let i = 0; i < this.points.length; i++) {
        ctx.lineTo(this.points[i]!.x, this.points[i]!.y);
      }

      ctx.closePath();
      ctx.fill();
    });
  }
}
