import { Viewport } from "@hycord/image";
import { Point, random } from "@hycord/math";

const view = new Viewport({
  width: 1024,
  height: 1024,
});

const words = ["will", "you", "be", "my", "valentine?"];
const points = [
  new Point({ x: random(100, 900), y: 100 }),
  new Point({ x: random(100, 900), y: 300 }),
  new Point({ x: random(100, 900), y: 550 }),
  new Point({ x: random(100, 900), y: 700 }),
  new Point({ x: random(100, 900), y: 900 }),
];
for (let i = 0; i < words.length; i++) {
  const none = "rgba(0,0,0,0)";
  view.drawPoint(points[i]!, {
    fillColor: none,
    lineWidth: 0,
    outline: false,
    radius: 128,
    strokeColor: none,
    text: words[i],
    textFillColor: "white",
    textStrokeColor: "white",
  });
}

function a(l: string, b: string) {
  return b;
}

a["tesing"] = "d";

console.log(a.tesing);

// There is now a black square at the top left corner of the canvas.

const imageBuffer = view.canvas.encodeSync("png");
Bun.write("./image.png", imageBuffer);
