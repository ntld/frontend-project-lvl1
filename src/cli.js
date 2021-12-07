import readlineSync from 'readline-sync';

export default function greeting() {
  const userName = readlineSync.question('May I have your name? ');
  const answer = `Hello, ${userName}!`;
  console.log(answer);
}
