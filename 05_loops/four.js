///loops on objects
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

//For in Loop -> it gives keys and using that we can access values

const myObject2 = {
  js: 'javascript',
  cpp: 'c++',
  py: 'python',
}
for (const key in myObject2) {
  console.log(`key is ${key} and value is ${myObject2[key]}`)
}

//for in loop on arrays
const arr = [1, 2, 3, 4, 5]
for (const key in arr) {
  console.log(`key is ${key} and value is ${arr[key]}`)
}
