import { MAX_SAFE_INTEGER, Point, Segment } from '..';

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
        new Segment([outerPoint, point]),
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
          polygon1._segments[j]!,
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
}
