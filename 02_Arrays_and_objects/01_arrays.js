const myArr = [1, 2, 3, 4, 5]
console.log(myArr)
console.log(myArr[0])

//array create shallow copy  -> same reference point

const myArr2 = myArr
myArr2[0] = 100 //chnage in both array
console.log(myArr2)
console.log(myArr)

//Array Methods
myArr.push(6)
console.log(myArr) //push in back

myArr.pop()
console.log(myArr) //pop from back

myArr.unshift(9) //insert at start but shifts the entire array
console.log(myArr)

myArr.shift()
console.log(myArr) //pop from start

console.log(myArr.indexOf(9))

const newArr = myArr.join() //-> newArr data type=string
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

//slice, splice
console.log('A', myArr)

//usig slice
const myn1 = myArr.slice(1, 3) //[1,3) 3 is excluded
console.log(myn1)
console.log('B', myArr)

//using splice
const myn2 = myArr.splice(1, 3) //splice changes the original array slice doesnt
console.log(myn2)
console.log('B', myArr)
