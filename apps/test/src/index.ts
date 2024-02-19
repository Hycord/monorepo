import { Viewport } from "@hycord/image";
import { Point, max, random, sum } from "@hycord/math";
import { FeedForwardNeuralNetwork } from "@hycord/neural";

const training = Bun.file("./data/train.csv");
const testing = Bun.file("./data/test.csv");
const validation = Bun.file("./data/validate.csv");
const trained = Bun.file("./data/brains/trained.json");
await Bun.write("./data/out.csv", "");

const traineddata = (await trained.exists()) ? await trained.text() : "";

const net = traineddata.length
  ? FeedForwardNeuralNetwork.fromData(JSON.parse(traineddata))
  : new FeedForwardNeuralNetwork([784, 128, 10], true);
if (!traineddata.length)
  await Bun.write("./data/brains/fresh.json", net.toData());

console.log("startup" + Bun.nanoseconds());

const headers = ["ImageId", "Label"];
const trainingText = await training.text();
const trainingRows = trainingText.split("\n");
trainingRows.shift();
const fullTrainingData = trainingRows.map((d) => {
  const [label, ...data] = d.split(",");
  return { label: Number(label!), data: data.map((n) => Number(n) / 255) };
});

const validationText = await validation.text();
const validationRows = validationText.split("\n");
validationRows.shift();
const fullValidationData = validationRows.map((d) => {
  const [label, ...data] = d.split(",");
  return { label: Number(label!), data: data.map((n) => Number(n) / 255) };
});

function getPredictedDigit(softmaxOutputs: number[]): number {
  let maxIndex = 0;
  let maxProbability = softmaxOutputs[0];

  for (let i = 1; i < softmaxOutputs.length; i++) {
    if (softmaxOutputs[i]! > maxProbability!) {
      maxIndex = i;
      maxProbability = softmaxOutputs[i];
    }
  }

  return maxIndex;
}
let trainingCycles = 0;
for (let i = 0; i < 2; i++) {
  for (const { data, label } of fullTrainingData) {
    if (data.length < net.inputSize) continue;
    trainingCycles++;
    const out = new Array(10).fill(0);
    out[label] = 1;
    net.train(data, out, 0.1);
  }
  let correct = 0;
  let incorrect = 0;

  for (let i = 0; i < fullValidationData.length; i++) {
    const data = fullValidationData[i];
    if (!data || data.data.length < net.inputSize) continue;

    const out = net.feedForward(data.data);
    const digit = getPredictedDigit(out);
    // outs.push(out)
    // output += `${data.label},${digit}\n`;
    if (data.label == digit) correct++;
    else incorrect++;
  }
  console.log(`Epoch ${i} Done`);
  console.log(`Correct: ${correct.toLocaleString()}`);
  console.log(`Incorrect: ${incorrect.toLocaleString()}`);
  const total = incorrect + correct;
  console.log(
    `Total Tests: ${total.toLocaleString()} (${((correct / total) * 100).toFixed(2)}%)`
  );
  console.log(`Training Cycles: ${trainingCycles.toLocaleString()}`);
}
await Bun.write("./data/brains/trained.json", net.toData());
console.log("Done writing");

// const testingText = await testing.text();
// const testingRows = testingText.split("\n");
// testingRows.shift();
// const testingData = testingRows.map((r) => r.split(",").map(Number));

// let output = headers.join(",") + "\n";

// for (let i = 0; i < testingData.length; i++) {
//   const data = testingData[i];
//   if (!data || data.length < net.inputSize) continue;

//   const out = net.feedForward(data);
//   const digit = getPredictedDigit(out);
//   output += `${i + 1},${digit}\n`;
// }

// await Bun.write("./data/out.csv", output);
// output += submissions.map((v, i) => [i + 1, v].join(",")).join("\n");

// await Bun.write("./data/test.txt", outs.map(d => d.join(',')).join('\n'))

// const view = new Viewport({
//   width: 1024,
//   height: 1024,
// });

// const words = ["will", "you", "be", "my", "valentine?"];
// const points = [
//   new Point({ x: random(100, 900), y: 100 }),
//   new Point({ x: random(100, 900), y: 300 }),
//   new Point({ x: random(100, 900), y: 550 }),
//   new Point({ x: random(100, 900), y: 700 }),
//   new Point({ x: random(100, 900), y: 900 }),
// ];

// for (let i = 0; i < words.length; i++) {
//   const none = "rgba(0,0,0,0)";
//   view.drawPoint(points[i]!, {
//     fillColor: none,
//     lineWidth: 0,
//     outline: false,
//     radius: 128,
//     strokeColor: none,
//     text: words[i],
//     textFillColor: "white",
//     textStrokeColor: "white",
//   });
// }

// // There is now a black square at the top left corner of the canvas.

// const imageBuffer = view.canvas.encodeSync("png");
// Bun.write("./image.png", imageBuffer);
