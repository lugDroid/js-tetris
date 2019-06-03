//import zPiece from './zPiece.js'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')



let piece = new zPiece()

document.addEventListener('keydown', function(event) {
  // left arrow
  if (event.keyCode == 37) {
      piece.moveLeft()
  }
  // right arrow
  else if (event.keyCode == 39) {
      piece.moveRight()
  }
  // z key
  else if (event.keyCode == 90) {
    piece.rotateLeft()
  }
  // x key
  else if (event.keyCode == 88) {
    piece.rotateRight()
  }
})

function draw() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
  piece.draw(ctx)
}

setInterval(draw, 10)

