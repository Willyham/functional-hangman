var prompt = require('prompt');
var Game = require('./game.js');
var Word = require('./word.js');

var dictionary = require('./basic-words.json');
var targetWord = pickRandomWord(dictionary);

function pickRandomWord(wordList) {
  var index = Math.floor(Math.random() * wordList.length);
  return wordList[index];
}

// Initialize the game with the target and max 5 bad guesses
var currentState = Game.init(targetWord, 5);

var alphabet = "abcdefghijklmnopqrstuvwxyz";

while (!currentState.hasWonGame && !currentState.hasLostGame) {
  // Simplest (dumb) strategy: pick a random letter!
  var guess = pickRandomWord(alphabet);
  currentState = Game.getNextState(guess);
  console.log(Word.getPartialWord(targetWord, currentState.lettersPicked));
}

console.log('Resulting state:', currentState);
