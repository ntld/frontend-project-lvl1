#!/usr/bin/env node
import { getRandomInRange, playGame } from '../src/index.js';

function gcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
}

function generateQuestion() {
  const num1 = getRandomInRange(1, 100);
  const num2 = getRandomInRange(1, 100);
  const question = `Question: ${num1} ${num2}`;
  console.log(question);
  return String(gcd(num1, num2));
}

const rules = 'Find the greatest common divisor of given numbers.';

playGame(rules, generateQuestion);
