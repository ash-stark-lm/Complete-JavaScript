//for loop

let num = 0
for (let i = 0; i <= 10; i++) {
  console.log(num)
  num++
}

console.log(' another loop')
num = 0
for (let i = 0; i <= 10; i++) {
  num++
  if (num == 5) continue
  if (num == 8) break
  console.log(num)
}
