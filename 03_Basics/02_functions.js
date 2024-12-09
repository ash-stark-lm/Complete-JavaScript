function calculateCartPrice1(num1) {
  return num1
}

console.log(calculateCartPrice1(100, 200, 300)) //giving 100 only still

function calculateCartPrice2(...num1) {
  //here ... is called rest operator
  return num1
}

console.log(calculateCartPrice2(100, 200, 300)) //[100, 200, 300]

function calculateCartPrice3(val1, val2, ...num1) {
  return num1
}

console.log(calculateCartPrice3(100, 200, 300, 400, 500, 600)) //val1=100, val2=200 rest in num1 [300,400,500,600]

const user = {
  username: 'stark',
  price: 999,
}

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  )
}

handleObject(user)
//handleObject ({username: 'stark', price: 999}) this can also be done

const myArray = [1, 2, 3, 4, 5]
function returnSecondValue(getArray) {
  return getArray[1]
}

console.log(returnSecondValue(myArray))
