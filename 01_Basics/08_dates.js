let myDate = new Date() ///Date-> an object
console.log(myDate.toString())
console.log(myDate.toLocaleString())

let myCreatedDate = new Date(2024, 0, 24) //0-> jan
console.log(myCreatedDate.toDateString())

let myCreatedDate1 = new Date('2024-01-24')
console.log(myCreatedDate1.toDateString())

//time Stamp
let myTimeStamp = Date.now()
console.log(myCreatedDate1.getTime())

console.log(Math.floor(Date.now() / 1000)) //miliseconds to seconds

let newDate = new Date()
console.log(newDate.getDay()) //0-> sunday

console.log(
  newDate.toLocaleString('default', {
    weekday: 'long',
  })
)
