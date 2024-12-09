let score = '33'

console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let score1 = '33abc'

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1) //Nan

let score2 = undefined
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2) //NaN

let score3 = null
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3) // 0

//"33"=>33
//"33abc" => NaN
//undefined => NaN
//null => 0
//true => 1
//false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1 => true
//0 => false
//"" => false i.e empty string -> false
//"ashish" => true i.e not empty string -> true

let stringNumber = String(33)
console.log(typeof stringNumber)
console.log(stringNumber)
