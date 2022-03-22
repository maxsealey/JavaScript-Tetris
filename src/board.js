import 'board.css';

class Board {
    constructor(ctx) {
        this.ctx = ctx;
    }
    // nested (multidimensional) arrays to represent board state
    getEmptyBoard() {
        return Array.from(
            {}
        )
    }
}
