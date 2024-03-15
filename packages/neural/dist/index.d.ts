import { Matrix } from '@hycord/math';

type ActivationFunction = (input: Matrix) => Matrix;
declare const ActivationFunctions: {
    relu: (inputs: Matrix) => Matrix;
    softmax: (input: Matrix) => Matrix;
    tanh: (inputs: Matrix) => Matrix;
    none: (inputs: Matrix) => Matrix;
};
type ActivationFunctionName = keyof typeof ActivationFunctions;
type ParsableActivationFunction = ActivationFunction | ActivationFunctionName;
declare function parseActivationFunction(input: ParsableActivationFunction): ActivationFunction;

type PrimeActivationFunction = (input: Matrix) => Matrix;
declare const PrimeActivationFunctions: {
    readonly tanh: (inputs: Matrix) => Matrix;
    readonly none: (inputs: Matrix) => Matrix;
};
type PrimeActivationFunctionName = keyof typeof PrimeActivationFunctions;
type ParsablePrimeActivationFunction = PrimeActivationFunction | PrimeActivationFunctionName;
declare function parsePrimeActivationFunction(input: ParsablePrimeActivationFunction): PrimeActivationFunction;

type LossFunction = (predicted: Matrix, actual: Matrix) => number;
declare const LossFunctions: {
    meanSquaredError: (predicted: Matrix, actual: Matrix) => number;
};
type LossFunctionName = keyof typeof LossFunctions;
type ParsableLossFunction = LossFunction | LossFunctionName;
declare function parseLossFunction(input: ParsableLossFunction): LossFunction;

type PrimeLossFunction = (predicted: Matrix, actual: Matrix) => Matrix;
declare const PrimeLossFunctions: {
    meanSquaredError: (predicted: Matrix, actual: Matrix) => Matrix;
};
type PrimeLossFunctionName = keyof typeof PrimeLossFunctions;
type ParsablePrimeLossFunction = PrimeLossFunction | PrimeLossFunctionName;
declare function parsePrimeLossFunction(input: ParsablePrimeLossFunction): PrimeLossFunction;

declare abstract class Layer {
    protected inputs: Matrix;
    protected outputs: Matrix;
    abstract forward(input: Matrix): Matrix;
    abstract backward(outputGradient: Matrix, learningRate: number): Matrix;
}

declare class DenseLayer extends Layer {
    protected weights: Matrix;
    protected biases: Matrix;
    constructor(inputSize: number, outputSize: number);
    forward(input: Matrix): Matrix;
    backward(outputGradient: Matrix, learningRate: number): Matrix;
}

declare class Activation extends Layer {
    private activationFunction;
    private primeActivation;
    constructor(activation?: ParsableActivationFunction, primeActivation?: ParsablePrimeActivationFunction);
    forward(input: Matrix): Matrix;
    backward(outputGradient: Matrix, learningRate: number): Matrix;
}

declare class NeuralNetwork {
    layers: Layer[];
    constructor(layers: Layer[]);
    forward(input: Matrix): Matrix;
    backward(dOutput: Matrix): Matrix;
    initializeParameters(): void;
}

declare class Tanh extends Activation {
    constructor();
}

declare function BackPropogate(predicted: Matrix, actual: Matrix, layers: Layer[], learningRate?: number, lossFunctionP?: ParsableLossFunction, primeLossFunctionP?: ParsablePrimeLossFunction): number;

declare class FeedForwardNetworkLayer {
    private _inputs;
    outputs: number[];
    private _biases;
    private _weights;
    constructor(inputs: number, outputs: number);
    toData(): {
        inputCount: number;
        outputCount: number;
        weights: number[][];
        biases: number[];
    };
    toDataString(): string;
    static fromData(data: any): FeedForwardNetworkLayer;
    private randomize;
    feedForward(inputs: number[]): number[];
    private sigmoid;
    get inputSize(): number;
    backwardPass(nextLayerError: number[], learningRate: number): number[];
}

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
    private RELU;
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

export { Activation, type ActivationFunction, type ActivationFunctionName, ActivationFunctions, BackPropogate, DenseLayer, FeedForwardNetworkLayer, FeedForwardNeuralNetwork, FeedForwardNeuralNetworkTrainer, Layer, type LossFunction, type LossFunctionName, LossFunctions, NeuralNetwork, type ParsableActivationFunction, type ParsableLossFunction, type ParsablePrimeActivationFunction, type ParsablePrimeLossFunction, type PrimeActivationFunction, type PrimeActivationFunctionName, PrimeActivationFunctions, type PrimeLossFunction, type PrimeLossFunctionName, PrimeLossFunctions, Tanh, parseActivationFunction, parseLossFunction, parsePrimeActivationFunction, parsePrimeLossFunction };
