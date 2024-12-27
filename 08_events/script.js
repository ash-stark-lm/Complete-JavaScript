/*
 document.getElementById('owl').onclick = function () {
  alert('You clicked on the owl image')
 } Not a good method use addEventListener instead

 attachEvent()
 jQuery- on
  */

/* to study these in eventlistener
 type, timestamp, defaultPrevented, 
target, to Element, srcElement, currentTarget,
clientX, clientY, screenX, screenY,
altKey, ctrlKey, shiftKey, keyCode,
*/
/*

document.getElementById('images').addEventListener(
  'click',
  function (e) {
    console.log('clicked inside the ul')
  },
  true //true-> capturing
)

document.getElementById('owl').addEventListener(
  'click',
  function (e) {
    console.log('owl clicked')
  },
  true
)*/
document.getElementById('images').addEventListener(
  'click',
  function (e) {
    console.log('clicked inside the ul')
  },
  false // default false hota hai -> bubbling
)

document.getElementById('owl').addEventListener(
  'click',
  function (e) {
    console.log('owl clicked')
  },
  false
)

document.getElementById('google').addEventListener(
  'click',
  function (e) {
    console.log('google clicked')
    e.preventDefault() // stops the default action of the e
    //e.stopPropagation() // stops the event from bubbling
  },
  false
)

// remove images when clicked
document.querySelector('#images').addEventListener('click', function (e) {
  console.log(e.target.tagName)

  if (e.target.tagName === 'IMG') {
    console.log(e.target.id)
    let removeIt = e.target.parentNode
    removeIt.remove()
  }

  // removeIt.parentNode.removeChild(removeIt)
})
