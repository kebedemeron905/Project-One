# Project-One


## Pre-load your app with  iconic images (to be determined): Start with ten cards.
Use an array of images and test in javascript to load the back
and front of flash cards.
```js
let flashCards = [
  {
    Artist: '#',
    cardImage: '#'
  },
  ```


## let the user flip through them quickly (back or front), 
## Use the keyboard flip the card: user can hit 'Enter' to flip card.
create arrow keys (back and next)
allow flip using keyboard.

 ## mark whether they got it right or not. 
   create conditional statments here:
   - user clicks green button to indicate correct answer
   - user clicks red button to indicate wrong answer
 ``` js
 <div class = "checkButtons">
<button class= "red"> </button>
<button class= "green"> </button>
</div>
```

 ## Track which cards were incorrect, and re-display them until the user gets them right!
  if the user answers wrong, use a for loop to redisplay images again and again.
```js
  for (i=0; i < flashCards.length; i++) {

  }

```
Bonus:

Track scores over time (even if the page is reloaded)
Include images on one or both sides of the flash card
Let the user add flash cards (don't need to be saved across refreshes)


## List of Functions Necessary:

back class = hidden Note**