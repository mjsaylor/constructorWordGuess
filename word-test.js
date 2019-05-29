const assert = require("assert");
const Word = require('./word')

const cat = new Word("cat");

assert(cat.toString() == "___", "A word with no guesses should be only underscores");

assert(!cat.guessLetters("h"), "An Incorrect Guess should return FALSE");

assert(cat.toString() == "___", "A word with no correct guesses should be only underscores");

assert(cat.guessLetters("t"), "A correct Guess should return TRUE");

assert(cat.toString() == "__t", "A word should replace underscores with underlying character if correctly guessed");


