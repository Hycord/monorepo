import { Controls } from "./controls";
import { Point } from "./geometry";

export class Viewport {
  private _canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
  private _ctx: CanvasRenderingContext2D | null;

  private _mouse: Point | null;

  private _controls: Controls;

  constructor(ref: React.MutableRefObject<HTMLCanvasElement | null>) {
    this._canvasRef = ref;
    this._ctx = null;
    this._mouse = null;

    this._controls = new Controls();

    this.init();
  }
  // private get canvas() {
  //   const canv = this._canvasRef.current;
  //   if (canv) return canv;
  //   else return null;
  // }

  public update() {
    this.clear();
  }

  public get width() {
    if (this._canvasRef.current) return this._canvasRef.current.width;
    return null;
  }

  public get height() {
    if (this._canvasRef.current) return this._canvasRef.current.height;
    return null;
  }

  public clear() {
    const canvas = this._canvasRef.current;
    if (canvas)
      this.shape((ctx) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, false);
  }

  private init() {
    const canvas = this._canvasRef.current;

    if (canvas) {
      this._ctx = canvas.getContext("2d");
      if (this._ctx) {
        // console.log("Add event listeners");
      }
    }
  }

  public dispose() {
    const canvas = this._canvasRef.current;

    if (canvas) {
      this._ctx = canvas.getContext("2d");
      if (this._ctx) {
        // console.log("remove event listeners");
      }
    }
  }

  public shape(draw: (ctx: CanvasRenderingContext2D) => void, save = true) {
    if (this._ctx) {
      if (save) this._ctx.save();
      draw(this._ctx);
      if (save) this._ctx.restore();
    }
  }
}
