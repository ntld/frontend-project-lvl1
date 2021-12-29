#!/usr/bin/env node
import { getRandomInRange, transformToString, playGame } from '../src/index.js';

const isPrime = (number) => {
  let primeNumber = true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      primeNumber = false;
      break;
    }
  }
  return transformToString(primeNumber);
};

function generateQuestion() {
  const number = getRandomInRange(1, 100);
  const question = `Question: ${number}`;
  console.log(question);
  return isPrime(number);
}

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

playGame(rules, generateQuestion);
