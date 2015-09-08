// find the second prime number following a given input.

var input = 7
var results = []

function getPrime (input, divideBy) {
  console.log("number:", input)
  if (divideBy % 2 === 0) {
    getPrime(input, divideBy - 1)
  } else {
    console.log("divideBy", divideBy);
    console.log("divideBy t/f", divideBy > 0)
    console.log("check", input % divideBy)
    if (divideBy > 0 && input % divideBy !== 0) {
      getPrime(input, divideBy - 1)
    } else {
      console.log("prime number found:", input)
      results.push(input)
      if (results.length === 2) {
        console.log(results)
        return results
      } else {
        console.log("getting next number")
        getPrime(input + 1, input)
      }
    }
  }
}

getPrime(input, input - 1)
