let i = 0
while (i <= 10) {
  console.log(i)
  i += 3
}

//do while executes atleast once even if the condition is false
let num = 10
do {
  console.log(num)
  num += 4
} while (num < 20)

console.log(`value of nums is ${num}`)

// even if the valus of nums is >20 still runs once
do {
  console.log(num)
  num += 4
} while (num < 20)
