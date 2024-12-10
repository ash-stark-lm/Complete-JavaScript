/*
var:-
var doesn't respect block scope
var are scoped tothe function in which they are declared
if declared outside any function it becomes a property of global object

let :-
let is scoped to the block in which it is declared
If used inside a function let is scoped to the function
If declared at the top level it is scoped globally but it does not become a property of the global object

const :-
all 3 properties similar to let
but the differnece is reassignment is not allowed
*/

function add(num1) {
  var n = 3
  return n + num1
}

//console.log(n) // n is not defined
console.log(add(2))

if (true) {
  let a = 10
  const b = 20
  var c = 30 //declared with var
}
//console.log(a) // a isn't defined
//console.log(b) // b isn't defined
console.log(c) //30 (accessible outside the block)

let a = 80
if (true) {
  let a = 'stark'
  console.log(a) //block scope
}
console.log(a) //global scope
