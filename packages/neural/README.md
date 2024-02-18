# @hycord/neural

This package is used to easily create and interface with Neural Networks


## Usage

- `FeedForwardNeuralNetwork` is the main class you will interact with.
 - You pass an array of numbers corrosponding to the number of neurons in each layer at that index with index 0 being the input layer and the last index being the output layer.
- `TrainingData` is a helper interface that is exported to make it easier to interface with the data expected by the network and trainer.
- `FeedForwardNeuralNetworkTrainer` is a helper class used to train a network with arbitrary training data.
 - It uses back-propogation and gradient-descent to train the network

```typescript
import {
  FeedForwardNeuralNetwork,
  FeedForwardNeuralNetworkTrainer,
  TrainingData,
} from '@hycord/neural';

const xorData: TrainingData[] = [
  { inputs: [0, 0], expectedOutput: [0] },
  { inputs: [0, 1], expectedOutput: [1] },
  { inputs: [1, 0], expectedOutput: [1] },
  { inputs: [1, 1], expectedOutput: [0] },
];

const network = new FeedForwardNeuralNetwork([2, 5, 1]);

const trainer = new FeedForwardNeuralNetworkTrainer(network);

trainer.train(xorData, 1_000, 0.1);
trainer.test(xorData);
```

The code above will genrate and test an example neural network for simulating an XOR gate.

The images below are examples of 100,000 training epochs (top image) and 1,000 training epochs (bottom image)
The epochs are adjusted in the second paramater of the `FeedForwardNeuralNetworkTrainer#train` function. In the code above it is set to 1,000.

You can optionally pass false as the second argument to `FeedForwardNeuralNetworkTrainer#test` and it will not log a summary in the console. This can be useful if you would like to display your own summary with many tests and don't want to clog the console.

![100,000 Epochs, 5 Internal Neurons](/public/100k.png)

![1,000 Epochs, 5 Internal Neurons](/public/1k.png)