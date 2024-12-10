//Nested scope

//child can access parents variable
function one() {
  const username = 'stark'

  function two() {
    const website = 'dc.com'
    console.log(username) //stark
  }
  //console.log(website) //website is not defined
  two()
}

one()

if (true) {
  const user = 'marvel'
  if (user === 'marvel') {
    const website = 'mcu.com'
    console.log(`user is ${user} and website is ${website}`)
  }
  //console.log(website) //website is not defined
}
//console.log(user) //user is not defined

//++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++

// Example 1: Function Declaration
console.log(addone(5)) // No error, output: 6
// Function declarations are **hoisted** to the top of their scope.
// This means the function `addone` is available for use even before it's defined.
function addone(num) {
  return num + 1 // Adds 1 to the passed argument and returns the result.
}

// Example 2: Function Expression
// console.log(addTwo(5));
// Uncommenting this line will throw an error: "Cannot access 'addTwo' before initialization"
// Function expressions assigned to variables (e.g., `const` or `let`) are **not hoisted**.
// The variable `addTwo` is in the Temporal Dead Zone until its initialization.

const addTwo = function (num) {
  // This is a function expression stored in a `const` variable.
  // The function adds 2 to the passed argument and returns the result.
  return num + 2
}

// After the initialization of `addTwo`, it can be called without errors.
console.log(addTwo(5)) // Output: 7
