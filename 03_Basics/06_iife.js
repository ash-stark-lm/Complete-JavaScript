// IIFE -> Immediately Invoked Function Expression
// IIFE is a JavaScript function that runs as soon as it is defined.

// Purpose of IIFE:
// 1. **Avoid Global Scope Pollution**: Variables and functions inside the IIFE are not accessible outside,
//    ensuring that the global scope remains clean.
// 2. **Execution at Definition**: Executes immediately after being defined, making it ideal for initialization tasks.

// Syntax:
// - The function is wrapped in parentheses `()` to make it an expression.
// - The second set of parentheses `()` immediately invokes the function.

;(function name() {
  //named IIFE
  console.log('IIFE')
})()

//()()-> first parenthsis where we define func and second is for execution

// Explanation of the Syntax:
// 1. `;` (Semicolon): Used to prevent syntax errors when the script follows another block of code.
//    Ensures this IIFE does not break due to an unintentional concatenation.
// 2. `()` (First Parentheses): Wraps the function to treat it as an expression instead of a declaration.
// 3. `()` (Second Parentheses): Immediately calls the function.

// writing in form of arrow functions
;(() => {
  console.log('IIFE using arrow')
})()
;((name) => {
  console.log(`it's me ${name}`)
})('stark')
