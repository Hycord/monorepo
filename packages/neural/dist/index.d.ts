declare class FeedForwardNeuralNetwork {
    private _layers;
    private _softmax;
    constructor(layers: number[], softmax?: boolean);
    static fromData({ config: { softmax }, layers, }: {
        config: {
            softmax: boolean;
        };
        layers: {
            inputCount: number;
            outputCount: number;
            weights: number[][];
            biases: number[];
        }[];
    }): FeedForwardNeuralNetwork;
    toData(): string;
    feedForward(inputs: number[]): number[];
    private softmax;
    get inputSize(): number;
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
