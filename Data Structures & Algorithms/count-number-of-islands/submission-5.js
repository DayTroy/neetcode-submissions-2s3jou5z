class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islandCount = 0;
        const visited = new Set();
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c] === "1" && !visited.has(`${r}-${c}`)) {
                    this.dfs(grid, r, c, visited);
                    islandCount++;
                }
            }
        }
        return islandCount;
    }

    dfs(grid, row, col, visited) {
        if (
            row < 0 || row >= grid.length ||
            col < 0 || col >= grid[0].length ||
            grid[row][col] === "0" ||
            visited.has(`${row}-${col}`)
        ) {
            return;
        }

        visited.add(`${row}-${col}`);

        this.dfs(grid, row - 1, col, visited);
        this.dfs(grid, row + 1, col, visited);
        this.dfs(grid, row, col - 1, visited);
        this.dfs(grid, row, col + 1, visited);
    }
}
