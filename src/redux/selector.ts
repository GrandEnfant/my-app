

export function checkWinner(field: (string | null)[][], turn: string): boolean {
    return (checkDiagonal(field, turn) || checkLines(field, turn));
};

function checkDiagonal(field: (string | null) [][], turn: string): boolean {
    let fromBottomLeftDiagonal = true;
    let fromTopLeftDiagonal = true;
    for(let i = 0; i < field.length; i++) {
        for(let j = 0; j < field[i].length; j++) {
            if (i === j) {
                fromBottomLeftDiagonal = fromBottomLeftDiagonal && (field[i][j] === turn);
            } else if (i + j === (field.length - 1)) {
                fromTopLeftDiagonal = fromTopLeftDiagonal && (field[i][j] === turn);
            }
        }
    }
    return fromBottomLeftDiagonal || fromTopLeftDiagonal;
};

const checkLines = function (field: (string | null)[][], turn: string): boolean {
    let isRowFill = true;
    let isColFill = true;

    for(let col = 0; col < field.length; col++) {
        for(let row = 0; row < field.length; row++) {
            isColFill = isColFill && (field[col][row] === turn);
            isRowFill = isRowFill && !!(field[row][col]);
        }
        if(isColFill || isRowFill) return true;
    }
    return false
};