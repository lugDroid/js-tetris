import Tetromino from './tetromino.js'

export default class TTetromino extends Tetromino {
  constructor(blockSize) {
    super(blockSize)

    // define layout for this particular tetromino
    this.layout = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0]
    ]

    this.color = '#FF00FF'
  }
}