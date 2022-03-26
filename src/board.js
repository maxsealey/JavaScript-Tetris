class Board {
    constructor(ctx) {
        this.ctx = ctx;
    }
    // nested (multidimensional) arrays to represent board state
    getEmptyBoard() {
        return new Array(COLS).map(x => x = new Array(ROWS).fill(0))
    }
}
