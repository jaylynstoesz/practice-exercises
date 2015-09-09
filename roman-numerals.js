// Convert Roman numeral inputs to numbers

var input = ('III')
var input2 = ('IV')
var input3 = ('XXV')
var input4 = ('XIV')
var input5 = ('LXXVII')

var numbers = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50
}

function convert (input) {
  var converted = input.split("").map(function (character) {
    return numbers[character]
  })

  var lastIndex = converted.length - 1
  if (converted[lastIndex] !== 1 && converted[lastIndex - 1] === 1) {
    var temp = []
    temp.push(converted[lastIndex] - converted[lastIndex - 1])
    converted = converted.slice(0, lastIndex - 1).concat(temp)
  }

  return converted.reduce(function (current, next) {
    return current + next
  })
}

console.log(input + ":", convert(input));
console.log(input2 + ":", convert(input2));
console.log(input3 + ":", convert(input3));
console.log(input4 + ":", convert(input4));
console.log(input5 + ":", convert(input5));
