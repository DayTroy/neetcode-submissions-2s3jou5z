class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        // 1 requirement
        for (let row of board) {
            const updatedRow = row.filter(item => item !== '.');
            if (updatedRow.join('') !== [...new Set(updatedRow)].join('')) {
                return false;
            }
        }

        // 2 requirement
        for (let i = 0; i < board.length; i++) {
            const column = []

            for (let j = 0; j < board.length; j++) {
                column.push(board[j][i]);
            }

            const updatedColumn = column.filter(item => item !== '.');

            if (updatedColumn.join('') !== [...new Set(updatedColumn)].join('')) {
                return false
            }
        }

        for (let square = 0; square < 9; square++) {
            let seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    if (board[row][col] === '.') continue;
                    if (seen.has(board[row][col])) return false;
                    seen.add(board[row][col]);
                }
            }
        }

        return true;
    }
}
