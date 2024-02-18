import { EPSILON, lerp } from "..";
import { Point } from "./Point";

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
}
