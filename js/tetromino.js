export default class ITetromino {

  constructor(x, y) {
    this.x = x
    this.y = y
    this.w = 40
    this.h = 10
    this.position = 1
  }

  draw(context) {
    context.beginPath()
    context.moveTo(this.x, this.y)
    context.lineTo(this.x + this.w, this.y)
    context.lineTo(this.x + this.w, this.y + this.h)
    context.lineTo(this.x, this.y + this.h)
    context.closePath()
    context.fill()
    context.stroke()
  }

  rotateRight() {
    switch (this.position) {
      case 1:
        this.x += 10
        this.y -= 10
        this.position++
        break
      case 2:
        this.x -= 20
        this.y += 10
        this.position++
        break
      case 3:
        this.x += 20
        this.y -= 10
        this.position++
        break
      case 4:
        this.x -= 10
        this.y += 10
        this.position = 1
        break
    }
    
    let oldW = this.w
    this.w = this.h
    this.h = oldW
  }

  rotateLeft() {
    /* this.x += 10 */
    let oldW = this.w
    this.w = this.h
    this.h = oldW
  }
}