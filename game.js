var R = require('ramda');
var Word = require('./word.js');

var targetWord = null;
var maxIncorrectGuesses = 8;
var currentState = null;

/**
 * Check whether the guess is correct or not
 * @param  {String} input The guess
 * @return {Boolean} true if input is in target, false otherwise
 */
function isCorrectGuess(input) {
  return R.contains(input, targetWord);
}

/**
 * Check whether the word is complete.
 * If it contains '_', it is not complete
 * @param  {String} word The word to check
 * @return {Boolean} True if complete, false otherwise
 */
function isCompleteWord(word) {
  return !R.contains('_', word);
}

module.exports = {

  /**
   * Initialize our state and some options
   */
  init: function init(target, guessLimit) {
    targetWord = target;
    maxIncorrectGuesses = guessLimit;
    currentState = {
      lettersPicked: [],
      incorrectGuesses: 0,
      hasWonGame: false,
      hasLostGame: false
    };
    return currentState;
  },

  /**
   * Given an input, move our current state to a new state.
   * @param  {String} input The input
   * @return {Oject} The new state
   */
  getNextState: function getNextState(input) {
    currentState.lettersPicked.push(input);
    if (!isCorrectGuess(input)) {
      currentState.incorrectGuesses++;
    }
    if (currentState.incorrectGuesses >= maxIncorrectGuesses) {
      currentState.hasLostGame = true;
    }
    var partialWord = Word.getPartialWord(targetWord, currentState.lettersPicked);
    if (isCompleteWord(partialWord)) {
      currentState.hasWonGame = true;
    }
    return currentState;
  }

};
