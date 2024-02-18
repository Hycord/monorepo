import { DEGREE, EPSILON } from './constants';

// Function to calculate the mean (average) of a list of numbers
export function mean(numbers: number[]): number {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// Function to calculate the median of a list of numbers
export function median(numbers: number[]): number {
  const sorted = numbers.sort((a, b) => a - b);
  const middleIndex = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middleIndex - 1]! + sorted[middleIndex]!) / 2;
  } else {
    return sorted[middleIndex]!;
  }
}

// Function to calculate the mode of a list of numbers
export function mode(numbers: number[]): number {
  const counts = new Map<number, number>();
  numbers.forEach((num) => {
    counts.set(num, (counts.get(num) || 0) + 1);
  });
  let maxCount = 0;
  let modeNum = 0;
  counts.forEach((count, num) => {
    if (count > maxCount) {
      maxCount = count;
      modeNum = num;
    }
  });
  return modeNum;
}

// Function to calculate the sum of a list of numbers
export function sum(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Function to calculate the minimum value in a list of numbers
export function min(numbers: number[]): number {
  return Math.min(...numbers);
}

// Function to calculate the maximum value in a list of numbers
export function max(numbers: number[]): number {
  return Math.max(...numbers);
}

// Function to calculate the range of a list of numbers
export function range(numbers: number[]): number {
  return max(numbers) - min(numbers);
}

// Function to calculate the variance of a list of numbers
export function variance(numbers: number[]): number {
  const meanValue = mean(numbers);
  const squaredDifferences = numbers.map((num) => Math.pow(num - meanValue, 2));
  return mean(squaredDifferences);
}

// Function to calculate the standard deviation of a list of numbers
export function standardDeviation(numbers: number[]): number {
  return Math.sqrt(variance(numbers));
}

// Function to calculate the geometric mean of a list of numbers
export function geometricMean(numbers: number[]): number {
  const product = numbers.reduce((acc, num) => acc * num, 1);
  return Math.pow(product, 1 / numbers.length);
}

// Function to calculate the harmonic mean of a list of numbers
export function harmonicMean(numbers: number[]): number {
  const reciprocalSum = numbers.reduce((acc, num) => acc + 1 / num, 0);
  return numbers.length / reciprocalSum;
}

export function degreeToRadian(deg: number) {
  return deg * DEGREE;
}

export function approximates(a: number, b: number) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}

export function random(minOrMax: number, max?: number): number {
  let min: number;
  let maxGenerated: number;

  if (max === undefined) {
    min = 0;
    maxGenerated = minOrMax;
  } else {
    min = minOrMax;
    maxGenerated = max;
  }

  // Generate a random number between min (inclusive) and max (exclusive)
  return Math.random() * (maxGenerated - min) + min;
}

export function randomInt(minOrMax: number, max?: number): number {
  return Math.floor(random(minOrMax, max));
}

export function lerp(min: number, max: number, i: number): number {
  return (min + (max - min)) * i;
}

export function probabilityToBoolean(p: number) {
  return p > 0.5;
}
