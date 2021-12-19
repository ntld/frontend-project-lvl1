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
  if (userAnswer === 'yes') {
    return true;
  }
  return false;
}

function isEven(number) {
  let evenNumber = false;
  if (number % 2 === 0) {
    evenNumber = true;
  }
  return evenNumber;
}

const userName = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const genNumber = generateQuestion();
const checkedNumber = isEven(genNumber);
const answer = collectUserAnswer();

if (checkedNumber === answer) {
  console.log('Correct!');
} else if (checkedNumber !== answer && answer === true) {
  console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
  console.log(`Let's try again, ${userName}!`);
} else {
  console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
  console.log(`Let's try again, ${userName}!`);
}
