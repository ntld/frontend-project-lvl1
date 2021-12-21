#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

function getRandomInRange() {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
  const number = getRandomInRange();
  const question = `Question: ${number}`;
  console.log(question);
  return number;
}

function collectUserAnswer() {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
}

function transformToBool(string) {
  let result = null;
  if (string === 'yes') {
    result = true;
  } else if (string === 'no') {
    result = false;
  }
  return result;
}

function transformToSting(boolValue) {
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
  return evenNumber;
}
console.log('Welcome to the Brain Games!');
const userName = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let numberOfCorrectAnswer = 0;
let endGame = false;

while (numberOfCorrectAnswer < 3 && endGame !== true) {
  const genNumber = generateQuestion();
  const checkedNumber = isEven(genNumber);
  const userAnswer = collectUserAnswer();
  const answer = transformToBool(userAnswer);

  if (checkedNumber === answer) {
    numberOfCorrectAnswer += 1;
    console.log('Correct!');
  } else {
    endGame = true;
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${transformToSting(checkedNumber)}'.`);
    numberOfCorrectAnswer = 0;
    console.log(`Let's try again, ${userName}!`);
  }
}

if (numberOfCorrectAnswer === 3) {
  console.log(`Congratulations, ${userName}!`);
}
