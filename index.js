const inquirer = require("inquirer");
const Word = require("./word")




//using inquirer, ask what letter user would like to guess 



// guess letter user inputs

class Game {
  constructor() {
    this.wordArray = ["Urinetown", "Wicked", "Once On This Island", "Aladdin", "Hair", "The Sound of Music", "Grease", "The Lion King", "Thoroughly Modern Millie", "Mamma Mia", "The Music Man", "Dreamgirls", "Fiddler on the Roof", "Ragtime", "Les Miserables", "Avenue Q", "A Chorus Line", "My Fair Lady", "The Producers", "Hairspray", "Oklahoma!", "Aida", "School of Rock", "Matilda", "Anything Goes", "Cabaret", "Annie", "The Book of Mormon", "Hamilton", "Big River", "Little Shop of Horrors", "Jesus Christ Superstar", "Into the Woods", "In the Heights", "Evita", "Miss Saigon", "Rent", "Sweeney Todd", "Spring Awakening", "Phantom of the Opera", "Something Rotten", "Jersey Boys", "The Band's Visit", "Guys and Dolls"];
    this.randomWord = this.wordArray[Math.floor(Math.random() * this.wordArray.length)];
    this.wordToGuess = new Word(this.randomWord);
    this.guessCount = 10;
  }

  playGame() {
    if (this.wordToGuess.guessed) {
      console.log(this.randomWord)
      console.log("YOU WIN!")
      return
    }
    if (this.guessCount == 0) {
      console.log(`GAME OVER! The correct show was "${this.randomWord}"`)
      return
    }
    console.log(`This hidden show is: \n ${this.wordToGuess}`)
    console.log(`You have ${this.guessCount} guess${this.guessCount == 1 ? "" : "es"} remaining!`)
    inquirer.prompt([
      {
        type: "input",
        name: "guess",
        message: "Guess Your Letter: ",
        validate: input => input.length == 1 && input.search(/[A-Za-z]/) > -1
      }
    ])
      .then(response => {
        console.log(response.guess)
        const guess = response.guess;
        const isGuessCorrect = this.wordToGuess.guessLetters(guess);
        if (!isGuessCorrect) {
          this.guessCount -= 1;
          this.playGame();
        } else {
          this.playGame();
        }
        
      })

  }
}

const game = new Game();
game.playGame();


