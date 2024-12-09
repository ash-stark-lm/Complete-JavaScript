function sum(a, b) {
  //parameters are a,b

  return a + b
}
const result = sum(1, 2) //arguments
console.log('Result: ', result)

function loginUserMessage(username) {
  if (!username) {
    console.log('Please enter a username')
    return
  }
  return `${username} just logged in`
}

console.log(loginUserMessage('stark'))
console.log(loginUserMessage())
