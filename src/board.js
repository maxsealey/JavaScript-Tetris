import './constants';

export default class Board {
    constructor(ctx) {
        this.ctx = ctx;
        this.board = this.getEmptyBoard()
    }
    // nested (multidimensional) arrays to represent board state
    getEmptyBoard() {
        return new Array(COLS).map(x => x = new Array(ROWS).fill(0))
    }
}
