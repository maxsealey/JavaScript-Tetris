class Board {
    constructor(ctx) {
        this.ctx = ctx;
        this.grid = this.getEmptyBoard()
    }
    // nested (multidimensional) arrays to represent board state
    /*getEmptyBoard() {
        return new Array(COLS).map(x => x = new Array(ROWS).fill(0))
    }*/
    getEmptyBoard() {
        return Array.from(
          {length: ROWS}, () => Array(COLS).fill(0)
        );
      }
}
