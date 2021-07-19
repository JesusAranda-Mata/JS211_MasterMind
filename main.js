'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const printBoard = () =>  {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
    if(board.length == 10){
      return "Game over!"
    }
  }
}

const generateSolution = () =>  {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}


/*

const correctLetterCounter = (guess) => {
  //solution = "abcd";
  const solutionArray = solution.split('');
  console.log(`Solution is split in to strings ${solutionArray}`);
  let guessArray = guess.split('');
  //console.log(`The guess is split in to arrays ${guessArray}`);
  let correctLetterLocations = 0;
  for(let i = 0; i < solutionArray.length; i++){
    //console.log(`Show me the index of each letter in solution: ${solutionArray[i]} ${solutionArray.indexOf(solutionArray[i])} `);
    //console.log(`Show me the index of each letter in guess: ${guessArray[i]} ${guessArray.indexOf(guessArray[i])}`);
      if(solutionArray[i] == guessArray[i] ){
        correctLetterLocations ++;
        console.log("correct Letter Counter: " + correctLetterLocations);
        solutionArray[i] = null; 
        //console.log(`Show me the new solution array ${solutionArray}`);
        return correctLetterLocations
      }
    }
}



const pinPoint = (guess) =>  {
  //solution = 'abcd'
  const solutionArray = solution.split('')
  //console.log(`Solution is split in to strings ${solutionArray}`);
  let guessArray = guess.split('');
  //console.log(`The guess is split in to arrays ${guessArray}`);
  let correctLetters = 0;
  for(let i = 0; i < solutionArray.length; i++){
    let letterFinder = solutionArray.includes(guessArray[i])
    if(letterFinder == true){
    //console.log(`this positions match: ${guessArray.indexOf(guessArray[i])}`)
    let targetIndex = guessArray.indexOf(guessArray[i])
    //console.log(`The correct letters location ${targetIndex}`);
    correctLetters =+ 1;
    console.log(`correct Letters: ${correctLetters}`);
    solutionArray[targetIndex] = null;
    console.log(`Show me the array after pinPoint ${solutionArray}`);
    return correctLetters
   }
  }
}
*/

const generateHint = (guess) =>  {
  /*-----
  The split() method divides a String into an ordered list of substrings,
   puts these substrings into an array, and returns the array.
  -------*/
  // your code here
  const solutionArray = solution.split('');
  //console.log(`Solution is split in to strings ${solutionArray}`);
  let guessArray = guess.split('');
  //console.log(`The guess is split in to arrays ${guessArray}`);
  let correctLetterLocations = 0;
  let correctLetters = 0;
  for(let i = 0; i < solutionArray.length; i++){
    console.log(i);
    //console.log(`Show me the index of each letter in solution: ${solutionArray[i]} ${solutionArray.indexOf(solutionArray[i])} `);
    //console.log(`Show me the index of each letter in guess: ${guessArray[i]} ${guessArray.indexOf(guessArray[i])}`);
      if(solutionArray[i] == guessArray[i] ){
        correctLetterLocations ++;
        //console.log("correct Letter Counter: " + correctLetterLocations);
        solutionArray[i] = null;
        //let newSolutionArray = guessArray 
        //console.log(`Show me the new solution array ${solutionArray}`);
        //return correctLetterLocations
      }
    }
  for(let b = 0; b < solutionArray.length; b++){
    console.log(b);
    //console.log(`Solution array after clc: ${solutionArray}`);
    let targetIndex = guessArray.indexOf(solutionArray[b])
    if(targetIndex > -1){
    //console.log(`this positions match: ${guessArray.indexOf(guessArray[i])}`)
    //console.log(`The correct letters location ${targetIndex}`);
    correctLetters ++;
    //console.log(`correct Letters: ${correctLetters}`);
    solutionArray[b] = null
    console.log(`Show me the array after pinPoint ${solutionArray}`);
    //return correctLetters
   }
  } 
  return correctLetterLocations + "-" + correctLetters
  //console.log("Hint: " + correctLetterLocations + "-" + correctLetters)
  }
  

const mastermind = (guess) => {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  if(guess == solution){
    //console.log(`You guessed it ${solution}`);
    //console.log(`You guessed it! ${solution}`);
    return "You guessed it!"
  }
  else{
    //getPrompt()
    board.push(generateHint(guess))
  }
}

const getPrompt = () =>  {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    //console.log(`Player guessed ${guess}`);
    //let guessArray = guess.split('')
    //console.log(`The guess is split in to arrays ${guessArray}`);
    printBoard();
    //generateHint(guess);
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}

/*------------------------------


--------------------------------*/