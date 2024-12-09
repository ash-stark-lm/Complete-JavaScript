// primitive vs non primitive data types

//primitive data types -> call by value i.e copy mai changes
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

//non primitive data types(reference) -> call by reference
// 1. object -> collection of key value pair
// 2. function
// 3. array

const heros = ['thor', 'spiderman', 'ironman']

let myObj = {
  name: 'ashish',
  age: 18,
}

console.log(typeof myObj) //object
console.log(heros)
console.log(typeof heros) //object

const myFunction = function () {
  console.log('Hello World')
}

console.log(typeof myFunction) //function
