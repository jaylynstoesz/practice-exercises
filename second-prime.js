// find the prime numbers following a given input.

var number = 13
var results = []

function getPrime (input, divisor, count) {
  var next = input + 1
  if (results.length === count) {
    console.log(results)
    return results
  }
  if (next % divisor === 0 && next === divisor) {
    results.push(next)
    getPrime(next, 2, count)
  } else if (next % divisor === 0 && next !== divisor) {
    getPrime(next++, 2, count)
  } else if (next % divisor !== 0) {
    divisor++
    getPrime(input, divisor, count)
  }
}

getPrime(number, 2, 5)
