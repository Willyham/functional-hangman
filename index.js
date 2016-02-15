var prompt = require('prompt');
var Game = require('./game.js');
var Word = require('./word.js');

var dictionary = ['cat', 'dog', 'code', 'javascript', 'for', 'smarties'];
var targetWord = pickRandomWord(dictionary);

function pickRandomWord(wordList) {
  var index = Math.floor(Math.random() * wordList.length);
  return wordList[index];
}

// Initialize the game with the target and max 5 bad guesses
var currentState = Game.init(targetWord, 5);

// Log our initial number of blanks
console.log(Word.getPartialWord(targetWord, currentState.lettersPicked));

prompt.start();
function getLetter() {
  prompt.get('guess', function(err, result) {
    var guess = result.guess;
    currentState = Game.getNextState(guess);
    if (currentState.hasWonGame) {
      console.log('Win!');
      return;
    }
    if (currentState.hasLostGame) {
      console.log('Lose!');
      return;
    }
    console.log(Word.getPartialWord(targetWord, currentState.lettersPicked));
    console.log('Letters guessed:', currentState.lettersPicked);
    getLetter();
  });
}

// Kick off the first prompt
getLetter();
