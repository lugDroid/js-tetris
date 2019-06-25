import Tetromino from './tetromino.js'

export default class ZTetromino extends Tetromino {
  constructor(blockSize) {
    super(blockSize)

    // define layout for this particular tetromino
    this.layout = [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ]

    this.color = '#0000FF'
  }
}