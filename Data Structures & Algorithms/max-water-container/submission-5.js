class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0, l = 0, r = heights.length - 1;

        while (l < r) {
            const width = r - l;
            const height = Math.min(heights[l], heights[r]);
            maxArea = Math.max(maxArea, width * height);

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return maxArea;
    }
}
