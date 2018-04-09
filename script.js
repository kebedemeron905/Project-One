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
// Remove commented code in production!

container.addEventListener('click', function () {
  console.log('clicked')
  // the currentanswer class for hidden is difficult to understand. I would recommend changing this to `hidden`.
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
    image: 'images/virtue.gif',
    answer: 'Vitruvian Man Leonardo da Vinci'
  },

  {
    image: 'images/pipe.jpg',
    answer: 'Trechery of Images by Rene Magritte'
  }
]

let currentScore = 0
let counter = 0

// used for default value setup
// functions should be camelCase!
// You can call this function later, so I would call it something more general
setCard()
function setCard () {
  // since you set the counter and currentScore to 0 outside of the function, you can omit setting them inside the function as well!
  currentImage.src = flashCards[counter].image
  currentAnswer.innerHTML = flashCards[counter].answer
  // I would use a CSS property here to change the height, width, and border-radius
  startingScore.innerHTML = currentScore

  correct.disabled = false
  wrong.disabled = false
}

correct.addEventListener('click', function () {
  // CurrentScore gets incremented by 1.
  currentScore++
  // you only need to display the score here, since your counter is staying the same!
  startingScore.innerHTML = currentScore
  // disable just the correct button.
  // you may want to add some sort of CSS to show that the button is disabled!
  // Button disabled Property W3Schools
  correct.disabled = true
})

// When the 'wrong' gets clicked answer automatically be displayed.
wrong.addEventListener('click', function () {
  // you could also do this!
  if (currentScore > 0) currentScore--
  startingScore.innerHTML = currentScore
  // no need for the other code since the button is enabled by default and you aren't changing the counter number!
})

function moveToFront () {
  if (frontSide.classList.contains('currentanswer')) {
    frontSide.classList.remove('currentanswer')
    currentAnswer.classList.add('currentanswer')
  }
}

// When 'next' is clicked, show next image.
next.addEventListener('click', function () {
  // you could rewrite like this to be a little bit simpler.
  if (counter > flashCards.length + 1) return
  counter++
  setCard()
  // since you do this multiple times I would make this its own function
  moveToFront()
})

previous.addEventListener('click', function () {
  if (counter <= 1) return
  counter--
  setCard()
  moveToFront()
})

// When 'reset_button' is clicked it reset to original values.
reset.addEventListener('click', function () {
  score = 0
  SetDefaultValue()
})
