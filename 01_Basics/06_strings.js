const name = 'ashish' //under the hood new keyword is used like below
const repoCount = '50'

//concatination
console.log('my name is ' + name + ' and repo count is ' + repoCount)
// above syntax is older and not recommended
//use backticks -> string interpolation modern way
console.log(`my name is ${name} and repo count is ${repoCount}`)

const gameName = new String('Stark')
console.log(gameName[0])

console.log(gameName.length)
console.log(name.length)

console.log(gameName.charAt(2))
console.log(gameName.indexOf('k'))
const newString = gameName.substring(0, 2) //[0,2) 2 is excluded
console.log(newString)

const anotherString = gameName.slice(-4, -2)
console.log(anotherString)

//trim and replace
const newString1 = '   ashish   '
console.log(newString1)
console.log(newString1.trim())

const url = 'https://ashish.com/hello.html'
console.log(url.replace('ashish', 'stark'))

//split
const languages = 'JavaScript,Python,Ruby'
console.log(languages.split(','))
