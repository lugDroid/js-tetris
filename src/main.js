import ITetromino from './iTetromino.js'
import JTetromino from './jTetromino.js'
import LTetromino from './lTetromino.js'
import OTetromino from './oTetromino.js'
import STetromino from './sTetromino.js'
import TTetromino from './tTetromino.js'
import ZTetromino from './zTetromino.js'
import Board from './Board.js'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let board = new Board(20, 40)

let pieces = [
  new ITetromino(),
  new JTetromino(),
  new LTetromino(),
  new OTetromino(),
  new STetromino(),
  new TTetromino(),
  new ZTetromino()
]

// get random tetromino
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

let i = 0
let tetromino
let rnd

rnd = getRandomInt(7)

/* let arr = [1, 1, 1, 1]

let result = arr.reduce( (acc, el) => {
  if (el == 0) {
    return el
  } else {
    return acc
  }
}, 1)

console.log(result) */

switch (rnd) {
  case 0:
    tetromino = new ITetromino()
    break
  case 1:
      tetromino = new JTetromino()
      break
  case 2:
      tetromino = new LTetromino()
      break
  case 3:
      tetromino = new OTetromino()
      break
  case 4:
      tetromino = new STetromino()
      break
  case 5:
      tetromino = new TTetromino()
      break
  case 6:
      tetromino = new ZTetromino()
      break
}

document.addEventListener('keydown', function(event) {
  // change piece to show
  if (event.keyCode == 32) {
    console.log(tetromino.active)
  }
  // left arrow
  if (event.keyCode == 37) {
    tetromino.moveLeft()
  }
  // right arrow
  else if (event.keyCode == 39) {
    tetromino.moveRight()
  }
  // down arrow
  else if (event.keyCode == 40) {
    tetromino.moveDown(board)
  }
  // z key
  else if (event.keyCode == 90) {
    tetromino.rotateLeft()
  }
  // x key
  else if (event.keyCode == 88) {
    tetromino.rotateRight()
  }
})

function draw() {

  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
  tetromino.draw(ctx)
  board.removeLines()
  board.draw(ctx)

  if (tetromino.active == false) {
    rnd = getRandomInt(7)

    switch (rnd) {
      case 0:
        tetromino = new ITetromino()
        break
      case 1:
          tetromino = new JTetromino()
          break
      case 2:
          tetromino = new LTetromino()
          break
      case 3:
          tetromino = new OTetromino()
          break
      case 4:
          tetromino = new STetromino()
          break
      case 5:
          tetromino = new TTetromino()
          break
      case 6:
          tetromino = new ZTetromino()
          break
    }
  }
}

setInterval(draw, 10)

