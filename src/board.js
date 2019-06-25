export default class Board {
  constructor(columns, rows, blockSize) {
    this.columns = columns
    this.rows = rows
    this.grid = []
    this.size = blockSize

    for (let i = 0; i < rows; i++) {
      let row = []
      for (let j = 0; j < columns; j++) {
        row.push(0)
      }
      this.grid.push(row)
    }
  }

  log() {
    this.grid.forEach( row => {
      row.forEach( el => console.log(el))
    })
  }

  draw(ctx) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        // draw square
        if (this.grid[i][j] == 1) {
          ctx.beginPath()
          ctx.rect(j * this.size, i * this.size, this.size, this.size)
          ctx.fillStyle = '#000000'
          ctx.fill()
          ctx.closePath()
        }
      }
    }
  }

  setPos(x, y) {
    this.grid[y][x] = 1
  }

  addTetromino(t) {
    for (let i = 0; i < t.layout.length; i++) {
      for (let j = 0; j < t.layout.length; j++) {
        if (t.layout[i][j] == 1) {
          this.setPos(t.x + j, t.y + i)
        }
      }
    }
  }

  checkPos(x, y) {
    return this.grid[y][x]
  }

  removeLines() {
    for (let i = 0; i < this.rows; i++) {
      let row = this.grid[i]

      let rowResult

      rowResult = row.reduce( (acc, cur, idx) => {
        if (cur == 0) {
          return cur
        } else {
          return acc
        }
      }, 1)

      if (rowResult == 1) {
        console.log(rowResult, i)
      }
      

      if (rowResult == 1) {
        console.log('about to delete row #' + i)
        // removes 1 element starting on pos i
        this.grid.splice(i, 1)

        // add new empty line at the top
        this.grid.unshift([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
      }
    }
  }
}