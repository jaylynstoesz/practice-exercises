// Convert Roman numeral inputs to numbers using a recursive function

// Here is a recursive function you could use to solve this problem. First, convert the Roman numerals into the values they represent. Then, run logic to find out if you need to subtract any of the values from another to get the correct answer: until you get to much larger numbers, the only times you need to subtract as opposed to simply totaling the numbers is when you have a 4 or a 9, in which cases the last numeral is not equal to 1 AND the second to last numeral is equal to 1. So, if these two conditions exist, simply replace the last two numerals with their difference (either 10 - 1 = 9 or 5 - 1 = 4) and find the sum of the remaining numerals using an accumulator variable and an index counter.

// However, I would not use a recursive function to solve this problem. I would use the .reduce method in roman-numerals.js, as it's basically the same functionality built into JavaScript. In the other solution you do not need global variables to get the job done, while here you need three.

var input = ('III')
var input2 = ('IV')
var input3 = ('XII')
var input4 = ('XIV')
var input5 = ('LXXVII')

var numbers = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50
}

var converted = input5.split("").map(function (character) {
  return numbers[character]
})
var index = 0
var total = 0

function convert () {
  if (index === converted.length) {
    console.log(input5 + ":", total);
    return converted
  }

  var lastIndex = converted.length - 1
  if (converted[lastIndex] !== 1 && converted[lastIndex - 1] === 1) {
    var temp = []
    temp.push(converted[lastIndex] - converted[lastIndex - 1])
    converted = converted.slice(0, lastIndex - 1).concat(temp)
  }

  total += converted[index]
  index ++
  convert()
}

convert()
