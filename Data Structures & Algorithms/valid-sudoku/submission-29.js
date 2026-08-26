class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: board.length }, () => new Set());
        const cols = Array.from({ length: board.length }, () => new Set());
        const boxs = Array.from({ length: board.length }, () => new Set());

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const item = board[i][j];
                if (item === '.') continue;

                const k = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (rows[i].has(item) 
                    || cols[j].has(item) 
                    || boxs[k].has(item)
                ) return false;

                rows[i].add(item);
                cols[j].add(item);
                boxs[k].add(item);
            }
        }

        return true;
    }
}
