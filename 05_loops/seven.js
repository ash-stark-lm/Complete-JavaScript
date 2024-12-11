const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map((num) => {
  return num * 2
})

console.log(newNums)

//Chaining

const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums2 = myNums2
  //implicit return
  .map((num) => num * 10) // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  .map((num) => num * 2) // [20, 40, 60, 80, 100, 120, 140, 160, 180, 200]
  .filter((num) => num > 100) // [120, 140, 160, 180, 200]

console.log(newNums2)

/* 
const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums2 = myNums2
  .map((num) => {
    return num * 10 // Explicit return
  })
  .map((num) => {
    return num * 2 // Explicit return
  })
  .filter((num) => {
    return num > 100 // Explicit return
  })

console.log(newNums2)
*/
