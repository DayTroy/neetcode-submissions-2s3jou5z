class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0, l = 0, r = heights.length - 1;

        for (let i = 0; i < heights.length; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                const width = j - i;
                const height = Math.min(heights[i], heights[j]);
                maxArea = Math.max(maxArea, width * height);
            }
        }

        return maxArea;
    }
}
