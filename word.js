//requires Letter.js
const Letter = require("./letter");
//contains constructor Word

class Word {
    //Word depends on the Letter constructor
    //used to create an object representing the current word user is attempting to guess
    //Word constructor should define:
    constructor(word) {
        //An array of new Letter objects representing the letters of the underlying word
        this.letters = word.split("").map(letter => new Letter(letter));
    }
    //function that returns a string representing the word
    toString() {
        //This should call the function on each letter object(the first funciton defined in Letter.js)
        //that displays the character or underscore and concatenate those together
        return this.letters.map(letter => letter.toString()).join('')
    }

    guessLetters(guess) {
        //function that takes a character as an argument and calls the guess function on each letter object
        //(the second function defined in Letter.js)
        let isGuessCorrect = false;
        this.letters.forEach(letter => {
            const letterGuess = letter.makeGuess(guess)
            if (letterGuess)
                isGuessCorrect = true;
        });
        return isGuessCorrect;
    }
    
}

module.exports = Word;


