class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < board.length; i++) {
            let seen = '';
            for (let j = 0; j < board.length; j++) {
                const cell = board[i][j];
                if (cell === '.') continue;
                if (seen.includes(cell)) return false;
                seen += cell;
            }
        }

        for (let i = 0; i < board.length; i++) {
            let seen = '';
            for (let j = 0; j < board.length; j++) {
                const cell = board[j][i];
                if (cell === '.') continue;
                if (seen.includes(cell)) return false;
                seen += cell;
            }
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const startRow = i * 3;
                const startCol = j * 3;
                let seen = '';

                for (let k = startRow; k < startRow + 3; k++) {
                    for (let m = startCol; m < startCol + 3; m++) {
                        const cell = board[k][m];
                        if (cell === '.') continue;
                        if (seen.includes(cell)) return false;
                        seen += cell;
                    }
                }
            }
        }

        return true;
    }
}