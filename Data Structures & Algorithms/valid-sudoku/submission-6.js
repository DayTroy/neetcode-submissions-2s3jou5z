class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({length: 9}, () => new Set());
        const cols = Array.from({length: 9}, () => new Set());
        const boxes = Array.from({length: 9}, () => new Set());

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                const cell = board[i][j];
                const k = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (cell === '.') continue;

                if (
                    rows[i].has(cell) || 
                    cols[j].has(cell) ||
                    boxes[k].has(cell)) {
                    return false;
                }

                rows[i].add(cell);
                cols[j].add(cell);
                boxes[k].add(cell);
            }
        }

        return true;
    }
}