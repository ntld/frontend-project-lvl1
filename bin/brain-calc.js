#!/usr/bin/env node
import { getRandomInRange, playGame } from '../src/index.js';

function generateRandomOperator() {
  const arr = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
}

function generateQuestion() {
  const num1 = getRandomInRange(1, 100);
  const num2 = getRandomInRange(1, 100);
  const operator = generateRandomOperator();
  const question = `Question: ${num1} ${operator} ${num2}`;
  console.log(question);
  return String(calculate(num1, num2, operator));
}

const rules = 'What is the result of the expression?';

playGame(rules, generateQuestion);
