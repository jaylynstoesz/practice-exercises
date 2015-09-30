var evens = [1, 2, 3, 4]
var squared = evens.map(v => v * v)
console.log(squared)

class Actor {
  constructor () {
    this.x = 0
    this.y = 0
  }
}

class Zombie extends Actor {
  constructor() {
    this.type = 'zombie'
  }
  bite (human) {
    human.zombify()
  }
  kill () {
    console.log("The human killed the zombie!")
  }
  chase (human) {
    this.x = Math.floor(Math.random() * 5)
    this.y = Math.floor(Math.random() * 5)
    console.log("zombie:", this.x, this.y);
    if (this.x === human.x && this.y === human.y) {
      this.bite(human)
    }
  }
}

class Human extends Actor {
  constructor () {
    this.type = 'human'
  }
  zombify () {
    this.type = 'zombie'
    console.log("The zombie ate the human!")
  }
  runAway (zombie) {
    this.x = Math.floor(Math.random() * 5) + 1
    this.y = Math.floor(Math.random() * 5) + 1
    console.log("human:", this.x, this.y);
    if (this.x === zombie.x + 1 || this.y === zombie.y + 1 || this.x === zombie.y + 1 || this.y === zombie.x + 1) {
      this.shoot(zombie)
    }
  }
  shoot (zombie) {
    zombie.kill()
  }
}

var human = new Human
var zombie = new Zombie
human.runAway(zombie)
zombie.chase(human)
