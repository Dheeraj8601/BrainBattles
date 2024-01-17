const prompt = require("prompt-sync")();
const questions = require("./qns/questions.js");

console.log("Welcome to the BrainBattles Quiz");

let name = prompt("Enter your name: ");
let score = 0;


function askQuestion(question) {
  let correctAnswer = question.answer.toUpperCase();
  let moveNext;

  do {
    let answer = prompt(`${question.question} : `);

    if (answer.toUpperCase() === correctAnswer) {
      console.log("You got it correct!");
      score++;
      return; // exit the function when the answer is correct
    } else {
      console.log("You are wrong..!");
      moveNext = prompt(
        "If you want to move to the next question, type 'next'; otherwise, just press Enter: "
      );
    }
  } while (moveNext.toLowerCase() === "next");
}


for (const currentQuestion of questions) {
  askQuestion(currentQuestion);
}


console.log(
  score >= 2
    ? `${name}, you scored ${score} points.`
    : `${name}, you scored only ${score} points. Better luck next time!`
);
