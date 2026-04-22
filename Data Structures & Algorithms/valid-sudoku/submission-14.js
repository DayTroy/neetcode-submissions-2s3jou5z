class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < board.length; i++) {
            let seen = '';
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] === '.') continue;
                if (seen.includes(board[i][j])) return false
                seen += board[i][j];
            }
        }

        for (let i = 0; i < board.length; i++) {
            let seen = '';
            for (let j = 0; j < board.length; j++) {
                if (board[j][i] === '.') continue;
                if (seen.includes(board[j][i])) return false
                seen += board[j][i];
            }
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let startRow = i * 3;
                let startCol = j * 3;
                let seen = '';
                for (let k = startRow; k < startRow + 3; k++) {
                    for (let m = startCol; m < startCol + 3; m++) {
                        if (board[k][m] === '.') continue;
                        if (seen.includes(board[k][m])) return false
                        seen += board[k][m];
                    }
                }
            }
        }

        return true;
    }
}