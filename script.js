let frontSide = document.querySelector('.front_side')
let currentImage = document.querySelector('.currentImage')
let currentAnswer = document.querySelector('.currentanswer')
let correct = document.querySelector('.correct')
let wrong = document.querySelector('.wrong')
let startingScore = document.querySelector('.currentscore')

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
  },

  {
    image: 'images/guernica.jpg',
    answer: 'Guernica by Pablo Picasso'
  },

  {
    image: 'images/flower.jpg',
    answer: 'The Flower Carrier by Diego Rivara'
  },

  {
    image: 'images/dogs.jpg',
    answer: 'Dogs Playing Poker by C.M. Coolidge'
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
  document.getElementById('arrayimg').width = '530'
  document.getElementById('arrayimg').height = '450'
  document.getElementById('arrayimg').style.borderRadius = '10px'
  startingScore.innerHTML = currentScore

  if (frontSide.classList.contains('currentanswer')) {
    frontSide.classList.remove('currentanswer')
    currentAnswer.classList.add('currentanswer')
  }
}

correct.addEventListener('click', function () {
  // CurrentScore gets incremented by 1.
  currentScore++
  startingScore.innerHTML = currentScore
  currentAnswer.innerHTML = flashCards[counter].answer
  currentImage.src = flashCards[counter].image
  correct.disabled = true
  wrong.disabled = false
  // disable just the correct button.
})

wrong.addEventListener('click', function () {
  currentScore--
  if (currentScore <= 0) {
    currentScore = 0
  }
  startingScore.innerHTML = currentScore
  currentAnswer.innerHTML = flashCards[counter].answer
  currentImage.src = flashCards[counter].image

  correct.disabled = true
  wrong.disabled = false
})

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) {
    counter++
    if (counter === flashCards.length) {
      console.log('done!')
      counter = 6
      return
    }
    currentImage.src = flashCards[counter].image
    currentAnswer.innerHTML = flashCards[counter].answer
    currentImage.src = flashCards[counter].image
    if (frontSide.classList.contains('currentanswer')) {
      frontSide.classList.remove('currentanswer')
      currentAnswer.classList.add('currentanswer')
    }
    correct.disabled = false
    wrong.disabled = false
    console.log('right')
  } else if (event.keyCode === 37) {
    counter--
    if (counter <= 0) {
      counter = 0
    }
    currentImage.src = flashCards[counter].image
    currentAnswer.innerHTML = flashCards[counter].answer
    currentImage.src = flashCards[counter].image
    if (frontSide.classList.contains('currentanswer')) {
      frontSide.classList.remove('currentanswer')
      currentAnswer.classList.add('currentanswer')
    }
    console.log('left')
    correct.disabled = false
    wrong.disabled = false
  } else if (event.keyCode === 32) {
    frontSide.classList.toggle('currentanswer')
    currentAnswer.classList.toggle('currentanswer')
  } else if (event.keyCode === 13) {
    SetDefaultValue()
  }
})
