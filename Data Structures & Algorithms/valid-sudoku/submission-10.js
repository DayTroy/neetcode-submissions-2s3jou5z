class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows  = Array.from({ length: board.length }, () => '')
        const cols  = Array.from({ length: board.length }, () => '')
        const boxes = Array.from({ length: board.length }, () => '')
        
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const item = board[i][j];
                const k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                
                if (item === '.') continue;

                if (rows[i].includes(item) || 
                    cols[j].includes(item) || 
                    boxes[k].includes(item)) {
                    return false;
                }
                
                rows[i] += item
                cols[j] += item
                boxes[k] += item

            }
        }
        
        return true;
    }
}