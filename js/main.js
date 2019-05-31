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
    if ((this.x + this.getMostRightPos()) < this.size) {
      this.x++
    }
  }

  moveLeft() {
    if (this.x + this.getMostLeftPos(0) > 0) {
      this.x--
    }
  }

  getMostRightPos() {
    let pos = this.layout.reduce( (acc, row, idx) => {
      let rowPos = row.reduce( (acc, cur, idx) => {
        //console.log("acc = " + acc + "; cur = " + cur + ";idx = " + idx)
        if (cur == 1 && idx > acc) {
          return idx
        } else {
          return acc
        }
      }, 0)

      if (rowPos > acc) {
        return rowPos
      } else {
        return acc
      }
    },0)

    // pos is array index value
    return pos + 1
  }

  getMostLeftPos() {
    let pos = this.layout.reduce( (acc, row, idx) => {
      let rowPos = row.reduce( (acc, cur, idx) => {
        //console.log("acc = " + acc + "; cur = " + cur + ";idx = " + idx)
        if (cur == 1 && idx < acc) {
          return idx
        } else {
          return acc
        }
      }, 0)

      if (rowPos < acc) {
        return rowPos
      } else {
        return acc
      }
    },0)

    // pos is array index value
    console.log(pos)
    return pos
  }

  rotateLeft() {
    // make copy of current layout
    let oldLayout = this.layout.map( row => {
      return row.slice()
    })

    // rotate
    for (let i = 0; i < this.layout.length; i++) {
      for (let j = 0; j < this.layout.length; j++) {
        this.layout[i][j] = oldLayout[this.layout.length - j - 1][i]
      }
    }
  }

  rotateRight() {
    // make copy of current layout
    let oldLayout = this.layout.map( row => {
      return row.slice()
    })

    // rotate
    for (let i = 0; i < this.layout.length; i++) {
      for (let j = 0; j < this.layout.length; j++) {
        this.layout[i][j] = oldLayout[j][this.layout.length - i - 1]
      }
    }

    // ensure piece doesn't go off limits
    if ((this.x + this.layout.length) > this.size) {
      this.x--
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.layout.length; i++) {
      for (let j = 0; j < this.layout.length; j++) {
        // draw square
        if (this.layout[i][j] == 1) {
          ctx.beginPath()
          ctx.rect((this.x + j) * this.size, (this.y + i) * this.size, this.size, this.size)
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

