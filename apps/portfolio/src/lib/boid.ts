import { Vector2D, lerp, mean, random } from "@hycord/math";
import { Point, PointDrawConfig, Polygon, Segment } from "./geometry";
import { Viewport } from "./viewport";

export type BoidEdgeType = "wrap" | "bounce" | "avoid";

export class Boid {
  private _location: Point;
  private _direction: Point;
  private _maxX: number;
  private _maxY: number;

  private _range: number;

  private _velocity: number;

  private _locationHistory: Point[];

  constructor({ maxX, maxY }: { maxX: number; maxY: number }) {
    this._maxX = maxX;
    this._maxY = maxY;
    this._location = new Point({
      x: random(this._maxX),
      y: random(this._maxY),
    });

    this._locationHistory = [];

    this._direction = Point.fromVector2D(Vector2D.randomUnit());

    this._velocity = random(1, 1.25);

    this._range = 32;
  }

  public get location() {
    return this._location;
  }
  public get velocity() {
    return this._velocity;
  }

  public randomize() {
    this._locationHistory.length = 0;
    this._location = new Point({
      x: random(this._maxX),
      y: random(this._maxY),
    });

    this._direction = Point.fromVector2D(Vector2D.randomUnit());
  }

  private avoidEdge() {
    const rangeToWall = 2 * this._range;

    let targetX, targetY;

    if (this._location.x < rangeToWall) {
      targetX = rangeToWall;
    } else if (this._location.x > this._maxX - rangeToWall) {
      targetX = this._maxX - rangeToWall;
    } else {
      targetX = this._location.x;
    }

    if (this._location.y < rangeToWall) {
      targetY = rangeToWall;
    } else if (this._location.y > this._maxY - rangeToWall) {
      targetY = this._maxY - rangeToWall;
    } else {
      targetY = this._location.y;
    }

    const target = new Point({ x: targetX, y: targetY });

    const distance = this._location.distanceTo(target);

    return { target, strength: lerp(0, 1, distance / rangeToWall) };
  }

  private separation(boids: Boid[]) {
    const target = new Point({ x: 0, y: 0 });

    for (const boid of boids) {
      if (this._location.distanceTo(boid._location) < this._range / 2) {
        target.subtract(this._location.clone().subtract(boid._location));
      }
    }
    return this._location.clone().subtract(target.normalize());
  }

  private cohesion(boids: Boid[]) {
    const target = new Point({ x: 0, y: 0 });

    for (const boid of boids) {
      target.add(boid._location);
    }

    if (boids.length > 0) {
      target.scale(1 / boids.length);
    }

    return target;
  }

  private alignment(boids: Boid[]) {
    const centroid = new Point({ x: 0, y: 0 });
    let vel = [this._velocity];

    for (const boid of boids) {
      centroid.add(boid._location);
      vel.push(boid._velocity);
    }

    if (boids.length > 0) {
      centroid.scale(1 / boids.length);
    }
    this._velocity = mean(vel);

    return this._location
      .clone()
      .add(centroid.clone().subtract(this._location).normalize());
  }

  update(
    b: Boid[],
    deltaTime: number,
    {
      alignmentStrength = 0,
      cohesionStrength = 0,
      separationStrength = 0,
      height,
      width,
    }: {
      cohesionStrength?: number;
      separationStrength?: number;
      alignmentStrength?: number;

      width?: number | null;
      height?: number | null;
    } = {}
  ) {
    if (width) this._maxX = width;
    if (height) this._maxY = height;
    const boids: Boid[] = [];
    for (const boid of b) {
      if (boid == this) continue;
      if (boid._location.distanceTo(this._location) > this._range) {
        continue;
      }
      boids.push(boid);
    }

    const steeringTargets: { target: Point; strength: number }[] = [];

    if (boids.length > 0) {
      steeringTargets.push({
        target: this.cohesion(boids),
        strength: cohesionStrength,
      });

      steeringTargets.push({
        target: this.alignment(boids),
        strength: alignmentStrength,
      });

      steeringTargets.push({
        target: this.separation(boids),
        strength: separationStrength,
      });
    }

    const isNearEdge =
      this._location.x < this._range * 2 ||
      this._location.x > this._maxX - this._range * 2 ||
      this._location.y < this._range * 2 ||
      this._location.y > this._maxY - this._range * 2;

    if (isNearEdge) steeringTargets.push(this.avoidEdge());
    // const randomDisplacement = new Point({
    //   x: random(-0.05, 0.05) * (deltaTime / 4),
    //   y: random(-0.05, 0.05) * (deltaTime / 4),
    // });

    // steeringTargets.push({
    //   target: this._location.clone().add(randomDisplacement),
    //   strength: 0.1,
    // });

    for (const { target, strength } of steeringTargets) {
      this.steerTowards(target, strength);
    }

    this._locationHistory.push(this._location.clone());
    if (this._locationHistory.length > 15) this._locationHistory.shift();
    this._location.add(
      this._direction
        .clone()
        .normalize()
        .scale(this._velocity * (deltaTime / 4))
    );
  }

  private steerTowards(target: Point, amount: number) {
    const currentDirectionNormal = this._direction.clone().normalize();

    const targetVector = target.clone().subtract(this._location);

    const targetDirectionNormal = targetVector.normalize();

    const newDirectionNormal = currentDirectionNormal.lerp(
      targetDirectionNormal,
      Math.min(1, amount) * 0.5
    );

    this._direction = newDirectionNormal.clone();
  }

  draw(
    view: Viewport,
    boids: Boid[],
    config?: PointDrawConfig & {
      renderPath?: boolean;
      renderViewDistance?: boolean;
    }
  ) {
    const end = this._location.clone().add(
      this._direction
        .clone()
        .normalize()
        .scale(this._range / 2)
    );
    const seg = new Segment([this._location, end]);

    // Calculate the direction perpendicular to the boid's direction
    const perpendicularDirection = new Point({
      x: -this._direction.y,
      y: this._direction.x,
    });

    // Calculate the offsets for the left and right base points
    const offset = perpendicularDirection
      .clone()
      .normalize()
      .scale(this._range / 6);

    // Calculate the left and right base points
    const leftPoint = this._location.clone().add(offset);
    const rightPoint = this._location.clone().subtract(offset);

    // Calculate the top point of the triangle
    const topPoint = end.clone();

    // Draw the elements
    const poly = new Polygon([leftPoint, rightPoint, topPoint]);

    if (config?.renderViewDistance)
      this._location.draw(view, {
        fillStyle: "rgba(255,255,255,0.01)",
        radius: this._range,
      });
    poly.draw(view);

    if (config?.renderPath && this._locationHistory.length > 0) {
      view.shape((ctx) => {
        ctx.strokeStyle = "rgba(175,175,175,0.5)";
        ctx.beginPath();

        const start = this._locationHistory[0]!;
        ctx.moveTo(start.x, start.y);
        for (let i = 1; i < this._locationHistory.length; i++) {
          const location = this._locationHistory[i]!;
          ctx.lineTo(location.x, location.y);
        }

        ctx.stroke();
      });
    }
  }
}
