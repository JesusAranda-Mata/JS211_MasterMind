const colors = ['orange', 'red', 'blue', 'yellow', 'green', 'purple'];

  // colors.forEach((color) => {
  //   console.log(`My favorite color is ${color}`);
  // });

const fun = () => {
  for (let i = 0; i < colors.length; i++){
    console.log(`This is my print ${colors[i]}`)
  }
}

fun()

let guess = "sass"

/*---------------------------------------------

const correctLetter = (guess) => {
  solution = "abcd";
  const solutionArray = solution.split('');
  //console.log(`Solution is split in to strings ${solutionArray}`);
  let guessArray = guess.split('');
  //console.log(`The guess is split in to arrays ${guessArray}`);
  let correctLetterLocations = 0;
  for(let i = 0; i < solutionArray.length; i++){
    //console.log(`Show me the index of each letter in solution: ${solutionArray[i]} ${solutionArray.indexOf(solutionArray[i])} `);
    //console.log(`Show me the index of each letter in guess: ${guessArray[i]} ${guessArray.indexOf(guessArray[i])}`);
      if(solutionArray[i] == guessArray[i]){
        correctLetterLocations += 1;
        console.log("correctLetterLocations: " + correctLetterLocations);
        solutionArray[i] = null; 
      }
    }
}
correctLetter(guess)

-----------------------------------------------------------------------*/

const pinPoint = (guess) =>  {
  solution = 'abcd'
  const solutionArray = solution.split('');
  //console.log(`Solution is split in to strings ${solutionArray}`);
  let guessArray = guess.split('');
  //console.log(`The guess is split in to arrays ${guessArray}`);
  let correctLetters = 0;
  for(let i = 0; i < solutionArray.length; i++){
   if(guessArray[i] == solutionArray[i]){
    //console.log(`this positions match: ${guessArray.indexOf(guessArray[i])}`)
    let targetIndex = guessArray.indexOf(guessArray[i])
    //console.log(`The correct letters location ${targetIndex}`);
    correctLetters =+ 1;
    console.log(`correct Letters position: ${correctLetters}`);
    solutionArray[i] = null;
   }
}
}

pinPoint(guess)
