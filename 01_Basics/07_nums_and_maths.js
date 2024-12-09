const score = 400
console.log(score)
console.log(typeof score)
const balance = new Number(100)
console.log(balance)
console.log(typeof balance)

console.log(balance.toString().length)

console.log(balance.toFixed(2)) //2 decimal places

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3))

const on2 = 123.8966
console.log(on2.toPrecision(3)) //124
console.log(on2.toPrecision(4)) //123.9
console.log(on2.toPrecision(2)) //1.2e+2

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min))
