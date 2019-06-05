import Tetromino from './tetromino.js'

export default class OTetromino extends Tetromino {
  constructor() {
    super()

    // define layout for this particular tetromino
    this.layout = [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ]

    this.color = '#FFA500'
  }
}