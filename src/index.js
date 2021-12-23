import readlineSync from 'readline-sync';
import greeting from './cli.js';

function collectUserAnswer() {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
}

export default function playGame(rules, generateQuestion) {
  console.log('Welcome to the Brain Games!');
  const userName = greeting();
  console.log(rules);

  let numberOfCorrectAnswer = 0;
  let endGame = false;

  while (numberOfCorrectAnswer < 3 && endGame !== true) {
    const correctAnswer = generateQuestion();
    const userAnswer = collectUserAnswer();

    if (correctAnswer === userAnswer) {
      numberOfCorrectAnswer += 1;
      console.log('Correct!');
    } else {
      endGame = true;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      numberOfCorrectAnswer = 0;
      console.log(`Let's try again, ${userName}!`);
    }
  }

  if (numberOfCorrectAnswer === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
