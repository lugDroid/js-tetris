import Tetromino from './tetromino.js'

export default class STetromino extends Tetromino {
  constructor() {
    super()

    // define layout for this particular tetromino
    this.layout = [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0]
    ]

    this.color = '#FF69B4'
  }
}