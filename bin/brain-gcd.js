#!/usr/bin/env node
import playGame from '../src/index.js';

function getRandomInRange() {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
}

function generateQuestion() {
  const num1 = getRandomInRange();
  const num2 = getRandomInRange();
  const question = `Question: ${num1} ${num2}`;
  console.log(question);
  return String(gcd(num1, num2));
}

const rules = 'Find the greatest common divisor of given numbers.';

playGame(rules, generateQuestion);
