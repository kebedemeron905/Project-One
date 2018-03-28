
let cardCounter = document.querySelector('.flashCards')
// let frontCards = document.querySelector('.front #image')
let backCards = document.querySelector('.back')
// let correct = document.querySelector('.green')
// let incorrect = document.querySelector('.red')
let image1 = document.querySelector('.image')

cardCounter.addEventListener('click', function () {
  console.log('clicked')
  image1.classList.toggle('back')
  backCards.classList.toggle('back')
})

let flashCards = [
  {
    work: 'The Kiss by Gustav Klmit',
    image: 'images/pipe.jpg'
  },

  {
    work: 'Trechery of Images by Rene Magritte',
    image: 'images/Thekiss.jpeg'
  },

  {
    work: 'Weeping Woman by Pablo Picasso',
    image: 'images/weeping_woman.jpg'
  }
]

// correct.addEventListener('click', function () {
//     for (let i = 0; i < flashCards.length; i++) {
//       flashCards[i] += 1
//     }
// incorrect.addEventListener('click', function () {

// })

// // let incorrect = [ ]
// // if
// // addEventListeners to buttons
// // in callback function: Increase the score if correct, then increase the question counter
// // redisplay card again if incorrect.
