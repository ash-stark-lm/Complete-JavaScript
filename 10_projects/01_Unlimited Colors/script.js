const randomColor = function () {
  const hex = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]
  }

  return color
}

function changeBgColor() {
  document.body.style.backgroundColor = randomColor()
}

let intervalId = null
const startChangingColors = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000)
    console.log(intervalId)
    console.log('started')
  }
}

const stopChangingColors = function () {
  if (intervalId != null) {
    clearInterval(intervalId)
    console.log(intervalId)
    intervalId = null
    console.log('stopped')
  }
}

document.getElementById('start').addEventListener('click', startChangingColors)

document.getElementById('stop').addEventListener('click', stopChangingColors)
