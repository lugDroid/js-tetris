export default class zPiece {

  constructor() {
    this.layout = [[1,1,0],
                   [0,1,1],
                   [0,0,0]]
    this.size = 3
  }

  rotateRight() {
    let oldLayout = this.layout

    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        this.layout[i][j] = oldLayout[this.size - j][i]
      }
    }
  }

  getLayout() {
    return this.layout
  }

}