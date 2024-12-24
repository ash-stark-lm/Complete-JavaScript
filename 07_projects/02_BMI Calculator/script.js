const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  const height = Number(document.querySelector('#height').value)
  const weight = Number(document.querySelector('#Weight').value)

  const results = document.querySelector('#results')
  if (isNaN(height) || height <= 0) {
    results.innerHTML = 'Please enter a valid height'
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = 'Please enter a valid weight'
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    let category = ''

    if (bmi < 18.5) {
      category = 'underweight'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'normal weight'
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'overweight'
    } else {
      category = 'obese'
    }
    results.innerHTML = `<span>Your BMI is ${bmi}.</br> You are ${category}.</span>`
  }
})
