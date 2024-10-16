#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Guess the Correct the Number Between 1 - 10 to Win this Game!",
        name: "guessingNumberGame",
        type: "number"
    }
]);
const randomDigitForGame = Math.floor(Math.random() * 10 + 1);
console.log(randomDigitForGame, "Here is the Correct Number you did'nt meet this.");
if (answer.guessingNumberGame === randomDigitForGame) {
    console.log('Congratulion! You Enter the Correct Number ');
}
else {
    console.log('You lose! You guessd the wrong number. ');
}
