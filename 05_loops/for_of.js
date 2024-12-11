// for of loop

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
  console.log(num)
}

const greetings = 'Hello World'

for (const char of greetings) {
  console.log(char)
}

//Maps -> it is an object that holds key values pairs

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')

console.log(map)

map.set('IN', 'INDIA') // replacing the value India -> INDIA

console.log(map)

for (const [key] of map) {
  console.log(key)
}

for (const [value] of map) {
  // it is same as above it will also print key and not value

  console.log(value)
}

for (const [key, value] of map) {
  console.log(key, ':-', value)
}

const myObject = {
  game1: 'call of duty',
  game2: 'NFS',
  game3: 'Fifa',
}

/*
for (const [key, value] of myObject) {  //myObject is not iterable like this
  console.log(key, ':-', value)
}
*/
//Syntax is like this if want to use for of loop
for (const [key, value] of Object.entries(myObject)) {
  console.log(key, ':-', value)
}
