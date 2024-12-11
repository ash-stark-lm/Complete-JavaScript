const coding = ['js', 'c++', 'python', 'java']
//what does froEach loop returns -> undefined

const values = coding.forEach((item) => {
  return item
})

console.log(values) //undefined

//How to do it

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => {
  return num > 4
})
console.log(newNums)

const newNums2 = []

myNums.forEach((nums) => {
  if (nums > 4) {
    newNums2.push(nums)
  }
})
console.log(newNums2)

const books = [
  {
    title: 'Book One',
    genre: 'Fiction',
    publishYear: 2018,
  },
  {
    title: 'Book Two',
    genre: 'Fiction',
    publishYear: 2019,
  },
  {
    title: 'Book Three',
    genre: 'Horror',
    publishYear: 2020,
  },
  {
    title: 'Book Four',
    genre: 'History',
    publishYear: 2021,
  },
  {
    title: 'Book Five',
    genre: 'Sci-Fi',
    publishYear: 2022,
  },
  {
    title: 'Book Six',
    genre: 'Fiction',
    publishYear: 2023,
  },
]

let userBooks = books.filter((bk) => {
  return bk.genre === 'Fiction'
})

console.log(userBooks)

let recentBooks = books.filter((bk) => {
  return bk.publishYear > 2020
})

console.log(recentBooks)
