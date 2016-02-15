# functional-hangman
An example (mostly) functional hangman game to teach some JavaScript. This code
is designed to show a separation of state and game logic from the user input, whilst
only using techniques covered so far my lessons (e.g. there are still for-loops where
map or reduce could be used).

In theory, due to the decoupling of the game logic and the input it should be
relatively simple to extend this code to 'switch sides' and let the user
choose a word and the computer make the guesses.

## Usage

```
clone this repo
npm install
node index.js
```

## Parts left as an exercise

There are lots of edge cases and some features missing which are left as an
exercise to complete. Things to think about:

  - What happens when the input isn't a letter?
  - What happens when the input has already been chosen?
  - What happens when the input is more than 1 character?
  - Do we ever tell the user how many lives they have left?
  - Can we draw a pictographic hangman instead of using lives?
  - Can you write a program to solve the puzzle for a random word?
