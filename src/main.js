import ITetromino from './iTetromino.js'
import JTetromino from './jTetromino.js'
import LTetromino from './lTetromino.js'
import OTetromino from './oTetromino.js'
import STetromino from './sTetromino.js'
import TTetromino from './tTetromino.js'
import ZTetromino from './zTetromino.js'
import Board from './Board.js'

// CONSTANTS
const KEY_LEFT = 37
const KEY_RIGHT = 39
const KEY_DOWN = 40
const KEY_Z = 90
const KEY_X = 88

const SPEED = 1000
const REFRESH_RATE = 10

const BLOCK_SIZE = 30
const COLUMNS = 10
const ROWS = 20

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let board = new Board(COLUMNS, ROWS, BLOCK_SIZE)

// get random tetromino
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

let i = 0
let tetromino
let rnd
let slideInterval

rnd = getRandomInt(7)

switch (rnd) {
  case 0:
    tetromino = new ITetromino(BLOCK_SIZE)
    break
  case 1:
    tetromino = new JTetromino(BLOCK_SIZE)
    break
  case 2:
    tetromino = new LTetromino(BLOCK_SIZE)
     break
  case 3:
    tetromino = new OTetromino(BLOCK_SIZE)
    break
  case 4:
    tetromino = new STetromino(BLOCK_SIZE)
    break
  case 5:
    tetromino = new TTetromino(BLOCK_SIZE)
    break
  case 6:
    tetromino = new ZTetromino(BLOCK_SIZE)
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
    slideInterval = setInterval(moveDown, 10)
  }
  else if (event.keyCode == KEY_Z) {
    tetromino.rotateLeft()
  }
  else if (event.keyCode == KEY_X) {
    tetromino.rotateRight()
  }
})

function moveDown() {
  tetromino.moveDown(board)
}

function draw() {

  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
  tetromino.draw(ctx)
  board.removeLines()
  board.draw(ctx)

  if (tetromino.active == false) {
    clearInterval(slideInterval)

    rnd = getRandomInt(7)

    switch (rnd) {
      case 0:
        tetromino = new ITetromino(BLOCK_SIZE)
        break
      case 1:
        tetromino = new JTetromino(BLOCK_SIZE)
        break
      case 2:
        tetromino = new LTetromino(BLOCK_SIZE)
        break
      case 3:
        tetromino = new OTetromino(BLOCK_SIZE)
        break
      case 4:
        tetromino = new STetromino(BLOCK_SIZE)
        break
      case 5:
        tetromino = new TTetromino(BLOCK_SIZE)
        break
      case 6:
        tetromino = new ZTetromino(BLOCK_SIZE)
        break
    }
  }
}

setInterval(moveDown, SPEED)
setInterval(draw, REFRESH_RATE)
