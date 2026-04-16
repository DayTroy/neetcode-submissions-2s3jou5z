class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let row of board) {
            let seen = '';
            for (let j = 0; j < row.length; j++) {
                if (row[j] === '.') continue;
                if (seen.includes(row[j])) return false;
                seen += row[j];
            }
        }

        for (let i = 0; i < board.length; i++) {
            let seen = '';
            for (let j = 0; j < board.length; j++) {
                if (board[j][i] === '.') continue;
                if (seen.includes(board[j][i])) return false;
                seen += board[j][i];
            }
        }

        for (let boxRow = 0; boxRow < 3; boxRow++) {
            for (let boxCol = 0; boxCol < 3; boxCol++) {
                let seen = '';
                let startRow = boxRow * 3;
                let startCol = boxCol * 3;

                for (let n = 0; n < 9; n++) {
                    const k = startRow + Math.floor(n / 3);
                    const l = startCol + (n % 3);
                    if (board[k][l] === '.') continue;
                    if (seen.includes(board[k][l])) return false;
                    seen += board[k][l];
                }

                // for (let k = startRow; k < startRow + 3; k++) {
                //     for (let l = startCol; l < startCol + 3; l++) {
                //         if (board[k][l] === '.') continue;
                //         if (seen.includes(board[k][l])) return false;
                //         seen += board[k][l];
                //     }
                // }
            }
        }

        return true;
    }
}