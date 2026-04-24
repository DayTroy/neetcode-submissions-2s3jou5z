class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                const computed = Math.min(heights[j], heights[i]) * (j - i);
                maxArea = Math.max(computed, maxArea);
            }
        }

        return maxArea;
    }
}
