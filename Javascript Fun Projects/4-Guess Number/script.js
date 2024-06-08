let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const inputValue = document.querySelector('#guessField');
const showGuess = document.querySelector('.guesses');
const remainingChance = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const restartGame = document.querySelector('.resultParas');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

const p = document.createElement('p');

if(playGame){
   
    submit.addEventListener('click',(e) => {
       e.preventDefault();
       let guessValue = parseInt(inputValue.value);
       console.log(guessValue);
       validateGuess(guessValue);
    });
}

function validateGuess(guessValue) {
    if(isNaN(guessValue)){
        alert('Please enter a valid number between 1 to 100');
    }
    else if(guessValue < 1){
        alert('Enter number greater than or equal to 1');
    }
    else if(guessValue > 100){
        alert('Enter number less than or equal to 100');
    }
    else{
        prevGuess.push(guessValue);
        if(numGuess === 11){
            displayGuess(guessValue);
            displayMsg(`Game Over . Random number was ${randomNumber}`);
            endGame();
        }
        else{
        displayGuess(guessValue);
        checkGuess(guessValue);
        }
    }
}

function checkGuess(guessValue) {
    if(guessValue === randomNumber){
        displayMsg('You won the Game');
        endGame();
    }
    else if(guessValue < randomNumber){
        displayMsg('Number guessed is TOO low');
    }
    else if (guessValue > randomNumber){
        displayMsg('Number guessed is TOO high');
    }
}

function displayGuess(guessValue){
 inputValue.value = '';
 showGuess.innerHTML += `${guessValue} , ` ;
 numGuess++;
 remainingChance.innerHTML =  `${11 - numGuess}`;
}

function displayMsg(Message) {
    lowOrHi.innerHTML = `<h2>${Message}</h2>`;
}

function endGame() {
    inputValue.value = '';
    inputValue.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'> Start New Game </h2> `
    restartGame.appendChild(p);
    playGame = false;
    newGame();
}
// function endGame() {
//     inputValue.value = '';
//     inputValue.setAttribute('disabled', '');
//     p.classList.add('button');
//     p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//     restartGame.appendChild(p);
//     playGame = false;
//     newGame();
//   }


function newGame(){
    
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        
        numGuess = 1;
        prevGuess = [];
        remainingChance.innerHTML = `${11 - numGuess}`;
        showGuess.innerHTML = '';
        inputValue.removeAttribute('disabled');
        restartGame.removeChild(p);
        
        playGame = true;
    });

}
// function newGame() {
//     const newGameButton = document.querySelector('#newGame');
//     newGameButton.addEventListener('click', function (e) {
//       randomNumber = parseInt(Math.random() * 100 + 1);
//       prevGuess = [];
//       numGuess = 1;
//       guessSlot.innerHTML = '';
//       remaining.innerHTML = `${11 - numGuess} `;
//       userInput.removeAttribute('disabled');
//       startOver.removeChild(p);
  
//       playGame = true;
//     });
//   }


/*
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 4) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
*/