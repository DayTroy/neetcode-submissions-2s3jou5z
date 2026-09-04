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
                    this.bfs(grid, r, c, visited);
                    islandCount++;
                }
            }
        }
        return islandCount;
    }

    bfs(grid, row, col, visited) {
        const queue = [[row, col]];
        visited.add(`${row}-${col}`);
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        while (queue.length > 0) {
            const [currRow, currCol] = queue.shift();

            for (const [dirRow, dirCol] of directions) {
                const neighRow = currRow + dirRow;
                const neighCol = currCol + dirCol;

                if (neighRow >= 0 && neighRow < grid.length &&
                    neighCol >= 0 && neighCol < grid[0].length &&
                    grid[neighRow][neighCol] === "1" &&
                    !visited.has(`${neighRow}-${neighCol}`)
                ) {
                    queue.push([neighRow, neighCol]);
                    visited.add(`${neighRow}-${neighCol}`);
                }
            }
        }
    }
}
