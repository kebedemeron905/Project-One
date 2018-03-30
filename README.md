# Project-One: Flash Cards


## Description

..* A compilation of flash cards that display famous works of art on the front, and the title and artist of the works on the back.

..* Product of HTML, CSS and JavaScript



## How To Play

..* Users may fork or clone this repo for use.
..* The goal of this game is for users to identify/review the title and artist of iconic artworks shown.
..* On the landing page, users will see the first artwork displayed. 
..* Users can click the correct button on the right if they know the answer, or the wrong button if they don’t. 
..* Users can tap on the image to flip and see the correct answer or confirm their answers.
..* They can navigate to the next image by clicking on the arrow keys at the bottom of the flash cards



## main issues:

..* Cards get incremented only when the correct button is clicked
      - only score should get incremented when "correct" is clicked

..* The back and the front of the flas cards operate independently. If card is left on the back/answer side, and the next button is clicked, card remains on the answer side. It should not. It should revert to showing the image/question side when the navigation arrows are clicked at any given point. 



3 points:

One: Hide back all the time 

```js
function showHide(back) {
  document.querySelector('.currentanswer').style.display = 'none'

    back.style.display = 'none';
}
```

Avoiding undefined array elements: it keeps incrementing
```js
if (flashCards[counter - 1].answer === 4 && flashCards[counter - 1].image === 4) {
  currentAnswer.innerHTML = ''
  currentImage.src = ''
}

 sometimes the correct button increments the counter: why?