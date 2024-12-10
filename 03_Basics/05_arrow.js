const user = {
  username: 'stark',
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to our website`)
    console.log(this) // here this refers to the user object
  },
}

user.welcomeMessage()
user.username = 'bruce'
user.welcomeMessage()

console.log(this) //{} empty object

function abc() {
  console.log(this) //gives a lot of things like window object
}

abc()

//coming to arrow function

const me = function () {
  let username = 'stark'
  console.log(this.username) //gives undefined
}
me()

//arrow function
const me2 = () => {
  let username = 'stark'
  console.log(this.username) //gives undefined
  console.log(this) //empty object {}
}
me2()

//explicit return
const addTwo = (num1, num2) => {
  //curly braces use return keyword
  return num1 + num2
}
console.log(addTwo(3, 4))

//implicit return
const addThree = (num1, num2, num3) => num1 + num2 + num3
console.log(addThree(3, 4, 5))
/*
const addone = (num) => (num + 1)
console.log(addone(3))
*/

const f = (n1, n2) => ({ username: 'stark' }) //object return krne k liye need to put in parenthesis

console.log(f(3, 4))
