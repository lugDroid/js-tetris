import Tetromino from './tetromino.js'

export default class LTetromino extends Tetromino {
  constructor() {
    super()

    // define layout for this particular tetromino
    this.layout = [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1]
    ]

    this.color = '#FF0000'
  }
}