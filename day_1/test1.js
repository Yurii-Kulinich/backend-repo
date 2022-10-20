function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// console.log(getRandomInt(10));

function randResult() {
    let first = getRandomInt(10);
    let second = getRandomInt(10);
    let third = getRandomInt(10);

    let result = 0;

    console.log (first + " " + second + " " + third);

    if (first === second || second === third || third === first ) result = 2;
    if (first === second && second === third) result = 3;
    console.log (result);
}

// randResult();

const guessNumber = (max) => {

  // generating random number 
  const random = Math.floor(Math.random() * max) + 1
  console.log(random);
  // take the input from yhe user
  let userNumber = parseInt(prompt('Guess a number from 1 to 10'));
  // take the input until the the guess is correct
  while(userNumber !== random) {
    
    
      if (userNumber < random) {
          alert('You number is to low');
          userNumber = parseInt(prompt('Guess a number from 1 to 10'));
      } else if(userNumber > random) {
          alert('You number is to high');
          userNumber = parseInt(prompt('Guess a number from 1 to 10'));
      } 
      

  };
 
  // check if answer correct
  if(userNumber === random) {
      alert('You guess the correct number');
  }
};
// guessNumber(10);

function randomNumber(){
  let randomNumber = Math.floor(Math.random()* 1000) + 1;
  console.log(randomNumber);
  return randomNumber;

} 


function isPerfect(){
  let isTrue = true;
  while (isTrue){
  let numberToTest = randomNumber();
  let arrayPerfect = [];
  for (let i = 1; i < numberToTest; i ++) {
    if(numberToTest % i === 0) arrayPerfect.push(i);
  }
  // console.log("this is array" + arrayPerfect);
  let result = 0;
  for (const temp of arrayPerfect) {
    result+= temp;
  }
  // console.log("this is a result " + result);

  if (result === numberToTest) {
    console.log(numberToTest + " is a perfect number");
    isTrue = false;
  }
  }
}

// isPerfect();
// fs = require('fs');

// fs.writeFileSync("my_file.txt", "bar");

var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');