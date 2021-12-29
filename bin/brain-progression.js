#!/usr/bin/env node
import { getRandomInRange, playGame } from '../src/index.js';

function generateSequence() {
  const initialNumber = getRandomInRange(1, 50);
  const step = getRandomInRange(2, 10);
  const length = getRandomInRange(5, 10);

  const result = [];
  result.push(initialNumber);

  for (let i = 1; i < length; i += 1) {
    const currentNumber = result[result.length - 1];
    const nextNumber = currentNumber + step;
    result.push(nextNumber);
  }
  return result;
}

function maskArray(arr, maskIndex) {
  const result = arr.slice();
  result[maskIndex] = '..';
  return result;
}

function generateQuestion() {
  const numberSequence = generateSequence();
  const maskIndex = getRandomInRange(0, numberSequence.length - 1);
  const correctAnswer = numberSequence[maskIndex];
  const maskedSequence = maskArray(numberSequence, maskIndex);
  const question = `Question: ${maskedSequence}`;
  console.log(question);
  return String(correctAnswer);
}

const rules = 'What number is missing in the progression?';

playGame(rules, generateQuestion);
