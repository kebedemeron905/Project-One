
let container = document.querySelector('.container')
let frontSide = document.querySelector('.front_side')
let currentImage = document.querySelector('.currentImage')
let currentAnswer = document.querySelector('.currentanswer')
let correct = document.querySelector('.correct')
let wrong = document.querySelector('.wrong')
let next = document.querySelector('.next')
let previous = document.querySelector('.previous')
let startingScore = document.querySelector('.currentscore')
let reset = document.querySelector('.reset')
document.getElementById('arrayimg').width = '430'
// let arrayImg = document.getElementById('arrayimg')

container.addEventListener('click', function () {
  console.log('clicked')
  frontSide.classList.toggle('currentanswer')
  currentAnswer.classList.toggle('currentanswer')
})

let flashCards = [
  { image: 'images/Kanagawa.jpg',
    answer: 'The Great Wave of Kanagawa by Hokusai'
  },

  {
    image: 'images/Thekiss.jpeg',
    answer: 'The Kiss by Gustav Klimt'

  },

  {
    image: 'images/weeping_woman.jpg',
    answer: 'Weeping Woman by Pablo Picasso'

  },

  {
    image: 'images/pipe.jpg',
    answer: 'Trechery of Images by Rene Magritte'
  }
]

let currentScore = 0
let counter = 0

// used for default value setup
SetDefaultValue()
function SetDefaultValue () {
  counter = 0
  currentImage.src = flashCards[counter].image
  console.log(currentImage)
  currentAnswer.innerHTML = flashCards[counter].answer
  currentScore = 0
  console.log(startingScore)
  document.getElementById('arrayimg').width = '430'
  document.getElementById('arrayimg').height = '350'
  document.getElementById('arrayimg').style.borderRadius = '10px'
  startingScore.innerHTML = currentScore
}

correct.addEventListener('click', function () {
  // CurrentScore gets incremented by 1.
  currentScore++
  startingScore.innerHTML = currentScore
  currentAnswer.innerHTML = flashCards[counter - 1].answer
  currentImage.src = flashCards[counter - 1].image
  counter++
  // disable buttons so that users don't keep scoring
  // document.querySelector('currentAnswer').style.fontSize = '20%'
})
correct.disabled = true
wrong.disabled = true

// if (flashCards[counter - 1].answer === 4 && flashCards[counter - 1].image === 4) {
//   currentAnswer.innerHTML = ''
//   currentImage.src = ''
// }

// disable buttons so that users don't keep scoring
// document.querySelector('currentAnswer').style.fontSize = '20%'

// Button disabled Property W3Schools

// When the 'wrong' gets clicked answer automatically be displayed.

wrong.addEventListener('click', function () {
  currentAnswer.innerHTML = flashCards[counter - 1].answer
  currentImage.src = flashCards[counter - 1].image
  frontSide.classList.toggle('currentanswer')
  currentAnswer.classList.toggle('currentanswer')
  correct.disabled = false
  wrong.disabled = false
})

// When 'next' is clicked, show next question.
next.addEventListener('click', function () {
  counter++
  frontSide.classList.add('currentImage')
  currentAnswer.classList.remove('currentanswer')
  currentAnswer.innerHTML = flashCards[counter - 1].answer
  currentImage.src = flashCards[counter - 1].image
  correct.disabled = false
  wrong.disabled = false
})

previous.addEventListener('click', function () {
  counter--
  currentAnswer.innerHTML = flashCards[counter].answer
  currentImage.src = flashCards[counter].image
})
correct.disabled = false
wrong.disabled = false
// When 'reset_button' is clicked it resets.
reset.addEventListener('click', function () {
  SetDefaultValue()
})
