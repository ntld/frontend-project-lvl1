import readlineSync from 'readline-sync';
import greeting from './cli.js';

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function transformBooleanToString(boolValue) {
  if (boolValue === true) {
    return 'yes';
  }
  return 'no';
}

function collectUserAnswer() {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
}

function playGame(rules, generateQuestion) {
  console.log('Welcome to the Brain Games!');
  const userName = greeting();
  console.log(rules);

  let numberOfCorrectAnswers = 0;

  while (numberOfCorrectAnswers < 3) {
    const correctAnswer = generateQuestion();
    const userAnswer = collectUserAnswer();

    if (correctAnswer === userAnswer) {
      numberOfCorrectAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      numberOfCorrectAnswers = 0;
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  if (numberOfCorrectAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}

export { getRandomInRange, transformBooleanToString, playGame };
