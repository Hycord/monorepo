declare class FeedForwardNeuralNetwork {
    private _layers;
    constructor(layers: number[]);
    feedForward(inputs: number[]): number[];
    train(inputs: number[], targets: number[], learningRate: number): void;
    private calculateError;
}

interface TrainingData {
    inputs: number[];
    expectedOutput: number[];
}

declare class FeedForwardNeuralNetworkTrainer {
    private network;
    private logger;
    constructor(network: FeedForwardNeuralNetwork);
    train(data: TrainingData[], epochs: number, learningRate: number): void;
    test(data: TrainingData[], log?: boolean): boolean[];
}

export { FeedForwardNeuralNetwork, FeedForwardNeuralNetworkTrainer, type TrainingData };
