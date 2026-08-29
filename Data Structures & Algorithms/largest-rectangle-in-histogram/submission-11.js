class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        const stack = [];
        for (let i = 0; i <= heights.length; i++) {
            let curr = heights[i];
            if (i === heights.length) {
                curr = 0;
            }
            while (stack.length > 0 && curr < heights[stack[stack.length - 1]]) {
                const stackInd = stack.pop();
                const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                const height = heights[stackInd];
                maxArea = Math.max(maxArea, width * height);
            }
            stack.push(i);
        }
        
        return maxArea;
    }
}
