class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const n = board.length;
        const m = board[0].length;
        function dfs(index, row, col) {
            if (index === word.length) return true;

            if (row < 0 || row >= n 
                || col < 0 || col >= m
                || board[row][col] !== word[index]
            ) {
                return false;
            }

            const temp = board[row][col];
            board[row][col] = '#'; 
        
            const found = dfs(index + 1, row - 1, col) ||
                          dfs(index + 1, row + 1, col) ||
                          dfs(index + 1, row, col - 1) ||
                          dfs(index + 1, row, col + 1)

             board[row][col] = temp;

             return found;
        }

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < m; c++) {
                if (dfs(0, r, c)) return true;
            }
        }

        return false;
    }
}
