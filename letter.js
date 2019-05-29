//contains constructor, Letter
//Letter should be able to display a
    //underlying character of
    //a blank placeholder
    //depending on whether or not the user has guessed the letter
//The constructor Letter should define:

    //a string value to store the underlying character for the letter
    //a boolean value that stores whether that letter has been guessed yet

//a function that 
    //returns the underlying character if the letter has been guessed
    //or a placeholder(underscore) if the letter has not been guessed

    
//a function that takes a character as an argument
    //and checks it against the underlying character
    //updating the stored boolean value to true if it was guessed correctly



class Letter {
    constructor(char){
        this.char = char;
        this.guessed = false;
    }
    toString(){
        // boolean_expression ? true_return_value : false_return_value
        // return this.guessed ? this.char : "_";
        if (this.guessed) {
            return this.char;
        } else {
            return "_";
        }
    }
    makeGuess(guess){
        if (guess == this.char) {
            this.guessed = true;
            return true
        } else {
            return false
        }

    }
}

const l = new Letter("l");
console.log(`Our new letter is ${l}`)

console.log("I'm going to make a guess that this letter is 'p'.")
let isGuessCorrect = l.makeGuess('p');
console.log(`The guess was correct ${isGuessCorrect}`)

console.log("I'm going to make a guess that this letter is 'l'.")
isGuessCorrect = l.makeGuess('l');
console.log(`The guess was correct ${isGuessCorrect}`)

console.log(l.guessed)
console.log(`Our new letter is ${l}`)




