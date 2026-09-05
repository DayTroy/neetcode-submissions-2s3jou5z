class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let max = 0;
        const visited = new Set();

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c] === 1 && !visited.has(`${r}-${c}`)) {
                    max = Math.max(max, this.dfs(grid, visited, r, c, 0));
                }
            }
        }

        return max;
    }

    dfs(grid, visited, row, col, count) {
        if (
            row < 0 || row >= grid.length ||
            col < 0 || col >= grid[0].length ||
            grid[row][col] === 0 ||
            visited.has(`${row}-${col}`)
        ) {
            return 0;
        }

        visited.add(`${row}-${col}`);
        
        let res = 1;
        res += this.dfs(grid, visited, row - 1, col, count + 1);
        res += this.dfs(grid, visited, row + 1, col, count + 1);
        res += this.dfs(grid, visited, row, col - 1, count + 1);
        res += this.dfs(grid, visited, row, col + 1, count + 1);
        return res;
    }
}
