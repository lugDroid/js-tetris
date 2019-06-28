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
const REFRESH_RATE = 100

const BLOCK_SIZE = 30
const COLUMNS = 10
const ROWS = 20

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let board = new Board(COLUMNS, ROWS, BLOCK_SIZE)
let slideInterval
let keyState = []

// get random tetromino
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function getRandomTetromino() {
  let randomT
  let rnd = getRandomInt(7)

  switch (rnd) {
    case 0:
      randomT = new ITetromino(BLOCK_SIZE)
      break
    case 1:
      randomT = new JTetromino(BLOCK_SIZE)
      break
    case 2:
      randomT = new LTetromino(BLOCK_SIZE)
       break
    case 3:
      randomT = new OTetromino(BLOCK_SIZE)
      break
    case 4:
      randomT = new STetromino(BLOCK_SIZE)
      break
    case 5:
      randomT = new TTetromino(BLOCK_SIZE)
      break
    case 6:
      randomT = new ZTetromino(BLOCK_SIZE)
      break
  }

  return randomT
}

let tetromino = getRandomTetromino()

// key listener
function keyEventLogger(e) {
  keyState[e.keyCode] = e.type == 'keydown'
}

document.addEventListener('keydown', keyEventLogger)
document.addEventListener('keyup', keyEventLogger)

// draw and refresh intervals
function draw() {
  if (keyState[KEY_LEFT]) {
    tetromino.moveLeft(board)
  }
  if (keyState[KEY_RIGHT]) {
    tetromino.moveRight(board)
  }
  if (keyState[KEY_DOWN]) {
    // TO DO - Add new drop function to tetromino 
  }
  if (keyState[KEY_Z]) {
    tetromino.rotateLeft()
  }
  if (keyState[KEY_X]) {
    tetromino.rotateRight()
  }

  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
  tetromino.draw(ctx)
  board.removeLines()
  board.draw(ctx)

  if (tetromino.active == false) {
    clearInterval(slideInterval)

    tetromino = getRandomTetromino()
    
  }
}

setInterval(draw, REFRESH_RATE)

// automatic down movement
function moveDown() {
  tetromino.moveDown(board)
}

setInterval(moveDown, SPEED)

