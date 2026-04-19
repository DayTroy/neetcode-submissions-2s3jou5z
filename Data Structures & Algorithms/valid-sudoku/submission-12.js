class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows  = Array.from({ length: 9 }, () => '');
        const cols  = Array.from({ length: 9 }, () => '');
        const boxes = Array.from({ length: 9 }, () => '');

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                const cell = board[i][j];
                const k = Math.floor(i / 3) * 3 + Math.floor(j / 3)
                if (cell === '.') continue;
                if (
                    rows[i].includes(cell) ||
                    cols[j].includes(cell) ||
                    boxes[k].includes(cell)
                ) {
                    return false
                }

                rows[i] += cell;
                cols[j] += cell;
                boxes[k] += cell;
            }
        }

        return true;
    }
}