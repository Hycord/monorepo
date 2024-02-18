import { Logger } from '@hycord/logger';
import { FeedForwardNeuralNetwork } from './FeedForwardNeuralNetwork';
import { TrainingData } from './TrainingData';

export class FeedForwardNeuralNetworkTrainer {
  private network: FeedForwardNeuralNetwork;
  private logger: Logger;

  constructor(network: FeedForwardNeuralNetwork) {
    this.network = network;
    this.logger = new Logger('FFNNTrainer');
  }

  public train(
    data: TrainingData[],
    epochs: number,
    learningRate: number,
  ): void {
    // Train the neural network with provided data
    for (let i = 0; i < epochs; i++) {
      for (const sample of data) {
        this.network.train(sample.inputs, sample.expectedOutput, learningRate);
      }
    }

    // Test the trained network with provided data
  }

  public test(data: TrainingData[], log: boolean = true) {
    const results: boolean[] = [];
    for (const sample of data) {
      const { inputs, expectedOutput } = sample;
      const prediction = this.network.feedForward(inputs);
      const result = deepEqual(expectedOutput, prediction.map(Math.round));
      results.push(result);
      if (log)
        this.logger.data(
          `Input: [${inputs.join(', ')}], Expected Output: ${expectedOutput}, Predicted Output: ${prediction.map(Math.round)}, Correct: ${result}`,
        );
    }
    return results;
  }
}
function deepEqual(x: unknown, y: unknown): boolean {
  const ok = Object.keys,
    tx = typeof x,
    ty = typeof y;
  return x && y && tx === 'object' && tx === ty
    ? ok(x).length === ok(y).length &&
        ok(x).every((key: unknown) =>
          deepEqual(x[key as never], y[key as never]),
        )
    : x === y;
}
