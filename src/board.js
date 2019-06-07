export default class Board {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.grid = []
    this.size = 20

    for (let i = 0; i < height; i++) {
      let row = []
      for (let j = 0; j < width; j++) {
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
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
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
}