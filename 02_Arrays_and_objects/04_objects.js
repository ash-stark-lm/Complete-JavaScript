//declaring using constructor -> singleton

const user = {} //non-singleton object
const appUser = new Object() //singleton object
appUser.id = '123'
appUser.name = 'stark'
appUser.isLoggedIn = false

console.log(appUser)

const regularUser = {
  email: 'stark@dc.com',
  userfullname: {
    firstname: 'tony',
    lastname: 'stark',
  },
}

console.log(regularUser.userfullname.firstname) //tony

//combining objects

const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'c', 4: 'd' }
const obj3 = { ...obj1, ...obj2 } //better way
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj3) //{ 1: 'a', 2: 'b', 3: 'c', 4: 'd' }
console.log(obj4) //{ 1: 'a', 2: 'b', 3: 'c', 4: 'd' }

const users = [
  {
    id: 1,
    email: 'stark@dc.com',
  },
]

users[0].email = 'stark@marvel.com'
console.log(users)

console.log(Object.keys(appUser)) //gives all keys in array data structure'
console.log(Object.values(appUser)) //gives all values in array data structure'
console.log(Object.entries(appUser)) //gives all keys and values in array data structure'

console.log(appUser.hasOwnProperty('email')) //false
console.log(appUser.hasOwnProperty('password')) //false
