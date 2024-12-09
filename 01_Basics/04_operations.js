let value = 3
let negValue = -value

console.log(negValue)

let str1 = 'hello'
let str2 = ' world'
let str3 = str1 + str2
console.log(str3)

//Below type of code writing are not advisable
console.log('1' + 2) //12  //string in first to sbko string k tarah treat
console.log(1 + '2') //12 //string last mai to pehle jo h vo conversion ho jayega
console.log('1' + 2 + 2) //122
console.log(1 + 2 + '2') //32 -> 1+2=3 and now 3+"2"=32

let num1, num2, num3
num1 = num2 = num3 = 2 + 3 // here num1=num2=num3=5

console.log(num1, num2, num3)

let x = 3
console.log(x)
let b = ++x
console.log(b)
let c = b++
console.log(c)
console.log(b)
