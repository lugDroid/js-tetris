export default class Tetromino {

  constructor() {
    this.layout = [
    ]

    // inner blocks size
    this.size = 20

    // initial position
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
        if (cur == 1 && acc == -1) {
          return idx
        } else {
          return acc
        }
      }, -1)

      if (rowPos < acc && rowPos >= 0) {
        return rowPos
      } else {
        return acc
      }
    },99)

    // pos is array index value
    return pos
  }

  rotateRight() {
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

    // ensure piece doesn't go off limits
    if ((this.x + this.layout.length) > this.size) {
      this.x--
    }
  }

  rotateLeft() {
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
  }

  draw(ctx) {
    for (let i = 0; i < this.layout.length; i++) {
      for (let j = 0; j < this.layout.length; j++) {
        // draw square
        if (this.layout[i][j] == 1) {
          ctx.beginPath()
          ctx.rect((this.x + j) * this.size, (this.y + i) * this.size, this.size, this.size)
          ctx.fillStyle = this.color
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