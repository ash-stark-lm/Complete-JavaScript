//forEach loop

const coding = ['js', 'c++', 'python', 'java']

//callback jo function hoga uska name nhi hoga
coding.forEach(function (item) {
  console.log(item)
})
console.log('\n')

//in form of arrow function
coding.forEach((item) => console.log(item))
console.log('\n')

function printMe(item) {
  console.log(item)
}

coding.forEach(printMe)

//foreach takes three arguments
coding.forEach((item, index, arr) => console.log(index, item, arr))

//Important note -> forEach on array of objetcs. it is very useful playing with database
const myHeros = [
  {
    name: 'stark',
    age: 18,
  },
  {
    name: 'thor',
    age: 20,
  },
  {
    name: 'spiderman',
    age: 17,
  },
]

myHeros.forEach((item) => {
  console.log(`name is ${item.name} and age is ${item.age}`)
})
