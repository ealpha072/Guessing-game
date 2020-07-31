//constants
let input  = document.getElementById('input');
let para = document.querySelector('.guess-holder');
let para2 = document.querySelector('.remaining-guess');
let head = document.querySelector('.game-status');
let submit = document.getElementById('submit')
let gameDiv = document.getElementById('game-holder')
const restart = document.createElement('button');
let guesses = [];
let numOfGuesses = 1;
let random = Math.floor(Math.random()*100)+1;

function endGame(){
    input.Value = '';
    input.setAttribute('disabled','');
    restart.textContent= 'Start new Game';
    gameDiv.appendChild(restart);
    restart.addEventListener('click',(e)=>{
        e.preventDefault();
        newGame();
    })
}

function newGame(){
    input.removeAttribute('disabled');
    random = Math.floor(Math.random()*100)+1;
    numOfGuesses = 1;
    guesses = [];
    para.innerHTML = '';
    para2.innerHTML = '';
    head.innerHTML = '';
    gameDiv.removeChild(restart);
}

function checkGuess(guess){
    if(guess === random){
        head.innerHTML ='Guessed value is correct';
        endGame()
    }else if(guess > random){
        head.innerHTML = '';
        head.innerHTML = 'Too high, try a lower value!'
    }else if(guess < random){
        head.innerHTML = '';
        head.innerHTML = 'Too low, try a higher value!'
    }
}

function validate(guess){
    if(guess > 100){
        alert('Enter a number below 100!!');
        input.value = '';
    }else if(isNaN(guess)){
        alert('You must enter a number!!')
    }
    else if(guess < 1){
        alert('Enter a number above 0!!')
        input.value = '';
    }else{
        guesses.push(guess);
        if(numOfGuesses === 10){
            displayGuess(guess);
            head.innerHTML = '';
            head.innerHTML = `Game over, the number is ${random} !!`
            endGame();
        }else{
            checkGuess(guess)
            displayGuess(guess);
            
        }
    }
}


function displayGuess(guess){
    input.value = '';
    para.innerHTML += guess+' '
    numOfGuesses++;
    para2.innerHTML = `${11- numOfGuesses} `;
}

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    const guess = parseInt(input.value);
    validate(guess)
})
