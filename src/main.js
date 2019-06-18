import ITetromino from './iTetromino.js'
import JTetromino from './jTetromino.js'
import LTetromino from './lTetromino.js'
import OTetromino from './oTetromino.js'
import STetromino from './sTetromino.js'
import TTetromino from './tTetromino.js'
import ZTetromino from './zTetromino.js'
import Board from './Board.js'

const KEY_LEFT = 37
const KEY_RIGHT = 39
const KEY_DOWN = 40
const KEY_Z = 90
const KEY_X = 88

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
  if (event.keyCode == KEY_LEFT) {
    tetromino.moveLeft(board)
  }
  else if (event.keyCode == KEY_RIGHT) {
    tetromino.moveRight(board)
  }
  else if (event.keyCode == KEY_DOWN) {
    tetromino.moveDown(board)
  }
  else if (event.keyCode == KEY_Z) {
    tetromino.rotateLeft()
  }
  else if (event.keyCode == KEY_X) {
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

