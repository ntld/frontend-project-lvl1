import readlineSync from "readline-sync";

export function greeting () {
    const userName = readlineSync.question('May I have your name? ');
    const answer = "Hello, " + userName + "!";
    console.log(answer);
}

