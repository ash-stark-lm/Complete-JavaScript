//De structuring

const course = {
  courseName: 'JS in advance',
  price: 999,
  courseInstructor: 'admin',
}

// course.courseInstructor

const { courseInstructor: alias } = course // destructuring

//console.log(courseInstructor)
console.log(alias)

// Json
/*
{
 "name": "ashish",
 "gender": "male",
}
*/
