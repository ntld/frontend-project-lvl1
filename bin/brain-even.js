#!/usr/bin/env node
import { getRandomInRange, transformBooleanToString, playGame } from '../src/index.js';

function isEven(number) {
  let evenNumber = false;
  if (number % 2 === 0) {
    evenNumber = true;
  }
  return transformBooleanToString(evenNumber);
}

function generateQuestion() {
  const number = getRandomInRange(1, 100);
  const question = `Question: ${number}`;
  console.log(question);
  return isEven(number);
}
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

playGame(rules, generateQuestion);
