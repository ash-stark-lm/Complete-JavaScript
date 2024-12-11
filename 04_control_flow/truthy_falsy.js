const userEmail = 'marvel@dc.com'

if (userEmail) {
  // as non empty string so it assumes it as true
  console.log('Got user email') // it wil get printed because it is truthy
} else {
  console.log('Did not get user email')
}

const userEmail2 = ''

if (userEmail2) {
  // as empty string so it assumes it as false
  console.log('Got user email')
} else {
  console.log('Did not get user email') // it will get printed
}

//Falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Values
/*
rest all values are truthy
// e.g- "0", 'false', " ", [], {},function() {}
*/

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
  //Object.keys(emptyObj) -> gives an array of keys in the object
  console.log('Object is empty')
}

//Nullish coalescing operator (??): null undeifned check krne k liye

let val1
val1 = 5 ?? 10
console.log(val1) //5

val1 = null ?? 10
console.log(val1) //10

val2 = undefined ?? 15
console.log(val2) //15

val4 = null ?? 10 ?? 20 //10
console.log(val4)

//ternary operator

// condition ? true : false
const price = 100

price <= 80
  ? console.log('price is greater than 80')
  : console.log('price is less than 80')
