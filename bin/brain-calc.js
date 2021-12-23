#!/usr/bin/env node
import playGame from '../src/index.js';

function getRandomInRange() {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
  const num1 = getRandomInRange();
  const num2 = getRandomInRange();
  const operator = generateRandomOperator();
  const question = `Question: ${num1} ${operator} ${num2}`;
  console.log(question);
  return String(calculate(num1, num2, operator));
}

const rules = 'What is the result of the expression?';

playGame(rules, generateQuestion);
