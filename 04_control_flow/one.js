//if
// = -> assignment, == -> checks value, === -> checks value + data type
const isUserLoggedIn = true
if (isUserLoggedIn) {
  console.log('user is logged in')
} else {
  console.log('user is not logged in')
}

if (2 == '2') {
  //true
  console.log('executed')
}

console.log(2 === '2') //false

const score = 200
if (score > 100) {
  const power = 'fly'
  console.log(`User power: ${power}`)
}
//console.log(power) //it will give error power is not defined

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
  console.log('allow to buy course')
}

const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log('user is logged in')
}
