//reduce method

const arr = [1, 2, 3]

const myTotal = arr.reduce(function (acc, curentValue) {
  console.log(`accumulator is ${acc} and current value is ${curentValue}`)
  return acc + curentValue
}, 0) // start kahan se kro -> 0 se kr rhe yahan

console.log(myTotal)

//in arrow function

const myTotal2 = arr.reduce((acc, curentValue) => acc + curentValue, 0)

console.log(myTotal2)

const shoppingCart = [
  {
    itemName: 'laptop',
    price: 50000,
  },
  {
    itemName: 'mobile',
    price: 10000,
  },
  {
    itemName: 'watch',
    price: 5000,
  },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay)
