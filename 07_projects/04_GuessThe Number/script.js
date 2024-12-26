let randomNumber = Math.floor(Math.random() * 100 + 1)

const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prev = []
let numGuess = 0

let playGame = true

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number')
  } else if (guess < 1) {
    alert('Please enter a number greater than 0')
  } else if (guess > 100) {
    alert('Please enter a number less than 100')
  } else {
    prev.push(guess)
    if (numGuess > 10) {
      displayGuess(guess)
      displayMsg('Game Over!')
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg('Congratulations! You got it right!')
    endGame()
  } else if (guess < randomNumber) {
    displayMsg('Wrong! Too low!')
  } else {
    displayMsg('Wrong! Too high!')
  }
}
function displayGuess(guess) {
  userInput.value = ''
  guessSlot.innerHTML += `${guess} `

  if (numGuess < 10) {
    numGuess++
  }

  if (numGuess === 10) {
    remaining.innerHTML = `0`
    displayMsg('Game Over!')
    endGame()
  } else {
    remaining.innerHTML = `${10 - numGuess}` // Display remaining guesses
  }
}

function displayMsg(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function (e) {
    randomNumber = Math.floor(Math.random() * 100 + 1)
    prev = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${10 - numGuess}`
    lowOrHi.innerHTML = ''
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}
