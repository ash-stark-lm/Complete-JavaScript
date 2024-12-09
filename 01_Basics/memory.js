// Stack(primitive) , Heap(reference)
let myName = 'ashish'
let anotherName = myName //copy of myName gaya
anotherName = 'stark' //shallow copy
console.log(myName)
console.log(anotherName)

//Non_primitive -> goes to heap -> refernce
let userOne = {
  name: 'ashish',
  age: 18,
}

let userTwo = userOne
console.log(userOne, userTwo)

userTwo.name = 'stark' // dono jagah change hoga
console.log(userOne, userTwo)
