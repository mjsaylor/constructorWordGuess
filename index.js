const inquirer = require("inquirer");
const Word = require("./word")


const wordArray = ["Maggie Jo", "Derek", "Christina", "Jacob", "Matt"];

const randomWord = wordArray[Math.floor(Math.random()*wordArray.length)];

console.log(randomWord)

const wordToGuess = new Word(randomWord);

console.log(wordToGuess.toString(" "))

