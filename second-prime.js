// find the prime numbers following a given input.

var number = 22
var results = []

function getPrime (input, count, divisor) {
  var next = input + 1
  if (!divisor) { divisor = 2 }
  if (results.length === count) {
    console.log(results)
    return results
  }
  if (next % divisor === 0 && next === divisor) {
    results.push(next)
    getPrime(next, count)
  } else if (next % divisor === 0 && next !== divisor) {
    getPrime(next++, count)
  } else if (next % divisor !== 0) {
    divisor++
    getPrime(input, count, divisor)
  }
}

getPrime(number, 4)
