//requires Letter.js

//contains constructor Word
//Word depends on the Letter constructor
//used to create an object representing the current word user is attempting to guess
//Word constructor should define:
    //An array of new Letter objects representing the letters of the underlying word
    //function that returns a string representing the word
        //This should call the function on each letter object(the first funciton defined in Letter.js)
        //that displays the character or underscore and concatenate those together
    //function that takes a character as an argument and calls the guess function on each letter object
        //(the second function defined in Letter.js)