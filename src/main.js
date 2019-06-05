import ITetromino from './iTetromino.js'
import JTetromino from './jTetromino.js'
import LTetromino from './lTetromino.js'
import OTetromino from './oTetromino.js'
import STetromino from './sTetromino.js'
import TTetromino from './tTetromino.js'
import ZTetromino from './zTetromino.js'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let pieces = [
  new ITetromino(),
  new JTetromino(),
  new LTetromino(),
  new OTetromino(),
  new STetromino(),
  new TTetromino(),
  new ZTetromino()
]

// console.log(
//   [1, 0, 1, 0].reduce( (acc, cur, idx) => {
//     if (cur == 1) {
//       return idx
//     } else {
//       return acc
//     }
//   })
// )

let i = 0

document.addEventListener('keydown', function(event) {
  // change piece to show
  if (event.keyCode == 32) {
    if (i < pieces.length - 1) {
      i++
    } else {
      i = 0
    }
  }
  // left arrow
  if (event.keyCode == 37) {
     pieces[i].moveLeft()
  }
  // right arrow
  else if (event.keyCode == 39) {
     pieces[i].moveRight()
  }
  // down arrow
  else if (event.keyCode == 40) {
    pieces[i].moveDown()
  }
  // z key
  else if (event.keyCode == 90) {
    pieces[i].rotateLeft()
  }
  // x key
  else if (event.keyCode == 88) {
    pieces[i].rotateRight()
  }
})

function draw() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
  pieces[i].draw(ctx)
}

setInterval(draw, 10)

