const initialBoard = document.createElement("div")

const boardState = new Array(10).forEach(el => new Array(16)).map(el => el = {
    isOccupied : 0, // boolean
    blockColor : "", // indicates type
})
