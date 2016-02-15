var R = require('ramda');

/**
 * Given a word and a list of letters, replace every instace of any letters
 * in the word with that latter, and everything else with '_'
 * @param  {String} targetWord The target word
 * @param  {String[]} lettersPicked Letters picked
 * @return {String} The new word, maybe with some blanks
 */
function getPartialWord(targetWord, lettersPicked) {
  var output = '';
  for (var i = 0; i < targetWord.length; i++) {
    var letter = targetWord[i];
    if (R.contains(letter, lettersPicked)) {
      output = output + letter;
      continue;
    }
    output = output + '_';
  }
  return output;
}

module.exports = {
  getPartialWord: getPartialWord,
};
