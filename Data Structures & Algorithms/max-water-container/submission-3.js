class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0, l = 0, r = heights.length - 1;

        while (l < r) {
            const height = Math.min(heights[l], heights[r]);
            maxArea = Math.max(maxArea, (r - l) * height);

            if (heights[l] > heights[r]) {
                r--;
            } else {
                l++;
            }
        }

        return maxArea;
    }
}
