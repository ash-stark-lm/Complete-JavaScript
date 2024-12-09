//singleton -> constrctor se banega to singleton bnega
//e.g object.create

//object literals ->singleton nahi banega

const mySym = Symbol('key1')

const user = {
  name: 'stark',
  'full name': 'Tony Stark',
  [mySym]: 'mykey1', //syntax for symbol
  age: 18,
  location: 'New Delhi',
  email: 'stark@dc.com',
  isLoggedIn: false,
  lastLoginDays: ['Monday', 'Tuesday'],
}

//how to access objects
console.log(user.email)
console.log(user['email']) //better

console.log(user['full name'])
console.log(user[mySym])
console.log(typeof mySym)

user.email = 'stark@marvel.com'
//Object.freeze(user) //freeze so cant change it now
user.email = 'stark@dc.com'
console.log(user)

user.greeting = function () {
  console.log(`hello user, ${this.name}`)
}
console.log(user.greeting) //function (anonymous function)

console.log(user.greeting()) //hello user, stark
