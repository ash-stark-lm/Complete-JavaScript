const marvelHeroes = ['thor', 'ironman', 'spiderman']
const dcHeroes = ['superman', 'flash', 'batman']
/*
marvelHeroes.push(dcHeroes)
console.log(marvelHeroes) //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
*/
const allHeroes = marvelHeroes.concat(dcHeroes)
console.log(allHeroes) //['thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman']

//spread operator
const anotherArray = [...marvelHeroes, ...dcHeroes]
console.log(anotherArray)

const anotherArray1 = [...marvelHeroes, 'wonderwoman', ...dcHeroes]
console.log(anotherArray1) //['thor', 'ironman', 'spiderman', 'wonderwoman', 'superman', 'flash', 'batman']

const other = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
const flatOther = other.flat(Infinity) //depth dena hota h upto which depth to flatten

console.log(flatOther)

console.log(Array.isArray('Stark'))
console.log(Array.from('Stark'))
console.log(Array.from({ name: 'stark' })) //give empty array need to specify keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
