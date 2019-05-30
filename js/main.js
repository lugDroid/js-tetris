//import ITetromino from './tetromino.js'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

class zPiece {

  constructor() {
    this.layout = [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ]
    this.size = 20
    this.x = 9
    this.y = 0
  }

  moveRight() {
    if ((this.x + this.layout.length) <= this.size) {
      this.x++
    }
  }

  moveLeft() {
    if (this.x > 0) {
      this.x--
    }
  }

  rotateLeft() {
    let oldLayout = this.layout.map( row => {
      return row.slice()
    })

    for (let i = 0; i < this.layout.length; i++) {
      for (let j = 0; j < this.layout.length; j++) {
        this.layout[i][j] = oldLayout[this.size - j - 1][i]
      }
    }
  }

  rotateRight() {
    let oldLayout = this.layout.map( row => {
      return row.slice()
    })

    for (let i = 0; i < this.layout.length; i++) {
      for (let j = 0; j < this.layout.length; j++) {
        this.layout[i][j] = oldLayout[j][this.size - i - 1]
      }
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.layout.length; i++) {
      for (let j = 0; j < this.layout.length; j++) {
        // draw square
        if (this.layout[i][j] == 1) {
          ctx.beginPath()
          ctx.rect((this.x + i) * this.size, (this.y + j) * this.size, this.size, this.size)
          ctx.fillStyle = '#FF0000'
          ctx.fill()
          ctx.closePath()
        }
      }
    }
  }

  log() {
    this.layout.forEach( row => {
      row.forEach( el => console.log(el))
    })
  }

}

//let piece = new ITetromino(40, 40)
let piece = new zPiece()

//piece.log()
//piece.rotateRight()
//piece.log()

function draw() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
  piece.draw(ctx)
}

setInterval(draw, 10)

document.addEventListener('keydown', function(event) {
  // left arrow
  if(event.keyCode == 37) {
      piece.moveLeft()
  }
  // right arrow
  else if(event.keyCode == 39) {
      piece.moveRight()
  }
});