var Plot = function (name, x, y) {
  this.x = x
  this.y = y
  this.name = name
}

var newFlag = new Plot ('flag', 4, 7)
var newPlayer5 = new Plot ('Player 5', 3, 4)
var newPlayer3 = new Plot ('Player 3', 1, 1)
var newPlayer2 = new Plot ('Player 2', 9, 12)
var newPlayer4 = new Plot ('Player 4', 10, 15)
var newPlayer1 = new Plot ('Player 1', 4, 7)

var allPlayers = [newPlayer1, newPlayer2, newPlayer3, newPlayer4, newPlayer5]

function distance (flag, player) {
  var rise = Math.pow(player.y - flag.y, 2)
  var run = Math.pow(player.x - flag.x, 2)
  return Math.sqrt(rise + run)
}

var distances = allPlayers.map(function (player) {
  playerObj = {}
  playerObj.name = player.name
  playerObj.distance = distance(newFlag, player)
  return playerObj
})

var smallest
function shorten (array) {
  var ordered = []
  for (var i = 1; i < array.length; i++) {
    if (Math.min(array[i].distance, array[i-1].distance) === array[i].distance){
      ordered.push(array[i])
    } else {
      ordered.push(array[i-1])
    }
  }
  if (ordered.length > 1) {
    shorten(ordered)
  } else {
    smallest = ordered[0]
    return smallest
  }
}

shorten(distances)
console.log('The player closest to the flag is', smallest.name, 'with a distance of', smallest.distance, 'units.');
