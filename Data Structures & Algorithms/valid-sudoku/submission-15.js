class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: board.length }, () => "");
        const cols = Array.from({ length: board.length }, () => "");
        const boxs = Array.from({ length: board.length }, () => "");

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (
                    rows[i].includes(board[i][j]) ||
                    cols[j].includes(board[i][j]) ||
                    // i = 5, j = 4, 4
                    boxs[Math.floor(i / 3) * 3 + Math.floor(j / 3)].includes(board[i][j])
                ) {
                    return false
                }

                if (board[i][j] === '.') continue;

                rows[i] += board[i][j];
                cols[j] += board[i][j];
                boxs[Math.floor(i / 3) * 3 + Math.floor(j / 3)] += board[i][j];

            }
        }

        return true;
    }
}