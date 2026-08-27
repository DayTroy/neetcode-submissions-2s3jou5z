class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        const stack = [];
        heights.push(0);

        for (let i = 0; i < heights.length; i++) {
            while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
                const heightIndex = stack.pop();
                const height = heights[heightIndex];
                const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }

        return maxArea;
    }
}
