
//Test Cases:
//#1
// word: "ant"
// words: ['tan', 'stand', 'at']
// result: [‘tan']
// #2
// var word = "master"
// var words = ['stream', 'pigeon', 'maters']
// result: ['stream', ‘maters']
// #3
// var word = "galea"
// var words = ["eagle"]
// result: []
// #4
// var word = "good"
// var words = ['dog', 'goody']
// result: []
// //#5
var word = "Orchestra"
var words = ['cashregister', 'Carthorse', 'radishes']
// result: ['Carthorse’]
// Write a function that detects anagrams.
// IT:
//  takes two arguments: a word and an array of words
//  returns an array of words that are anagrams of the given word
// does not return anagram subsets (given “good” should not return “dog” or “goody”)
// is case insensitive
// does not detect itself as an anagram (given “hello” should not return “hello”)

// var word = 'ant'
// var words = ['tan', 'stand', 'at', 'ant', 'top']

var getAnagrams = function (word, words) {
  var cleaned = words.filter(function (compareTo) {
    return compareTo.length === word.length && compareTo !== word
  })
  var letters = word.split("")
  var foo = cleaned.filter(function (item) {
    var checked = item.split("").map(function (letter) {
      for (var i = 0; i < letters.length; i++) {
        if (letter.toLowerCase() === letters[i].toLowerCase()) {
          return letter
        }
      }
    })
    return checked.join("") === item
  })
  return foo
}

console.log("WORD:", word);
console.log("ANAGRAMS:", getAnagrams(word, words));
