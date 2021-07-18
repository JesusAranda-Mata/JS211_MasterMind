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

const correctLetterCounter = (guess) => {
  //solution = "abcd";
  const solutionArray = solution.split('');
  //console.log(`Solution is split in to strings ${solutionArray}`);
  let guessArray = guess.split('');
  //console.log(`The guess is split in to arrays ${guessArray}`);
  let correctLetterLocations = 0;
  for(let i = 0; i < solutionArray.length; i++){
    //console.log(`Show me the index of each letter in solution: ${solutionArray[i]} ${solutionArray.indexOf(solutionArray[i])} `);
    //console.log(`Show me the index of each letter in guess: ${guessArray[i]} ${guessArray.indexOf(guessArray[i])}`);
      if(solutionArray[i] == guessArray[i] ){
        correctLetterLocations += 1;
        console.log("correctLetterCounter: " + correctLetterLocations);
        solutionArray[i] = null; 
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
   if(guessArray[i] == solutionArray[i]){
    //console.log(`this positions match: ${guessArray.indexOf(guessArray[i])}`)
    let targetIndex = guessArray.indexOf(guessArray[i])
    console.log(`The correct letters location ${targetIndex}`);
    correctLetters =+ 1;
    console.log(`correct Letters position: ${correctLetters}`);
    solutionArray[i] = null;
   }
  }
}

const generateHint = (guess) =>  {
  /*-----
  The split() method divides a String into an ordered list of substrings,
   puts these substrings into an array, and returns the array.
  -------*/
  // your code here
  correctLetterCounter(guess)
  pinPoint(guess)
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
    //Question for tomorrow -------------
    let hint = generateHint(guess)
    hint.push("guess")
    getPrompt()
    console.log(hint);
  }
}


const getPrompt = () =>  {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    console.log(`Player guessed ${guess}`);
    //let guessArray = guess.split('')
    //console.log(`The guess is split in to arrays ${guessArray}`);
    printBoard();
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
correct Letter Counter is showing correct number of letters on the right place
How do i make it Show only one and not every single time in finds one?

The pinPoint is suppose to return every single correct letter even when they are not in the right place?

When is push suppose to be place? 
--------------------------------*/