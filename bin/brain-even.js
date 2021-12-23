#!/usr/bin/env node
import playGame from '../src/index.js';

function getRandomInRange() {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function transformToString(boolValue) {
  if (boolValue === true) {
    return 'yes';
  }
  return 'no';
}

function isEven(number) {
  let evenNumber = false;
  if (number % 2 === 0) {
    evenNumber = true;
  }
  return transformToString(evenNumber);
}

function generateQuestion() {
  const number = getRandomInRange();
  const question = `Question: ${number}`;
  console.log(question);
  return isEven(number);
}
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

playGame(rules, generateQuestion);
