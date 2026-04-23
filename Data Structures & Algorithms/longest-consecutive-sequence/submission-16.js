class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // [2,20,4,10,3,4,5]

    longestConsecutive(nums) {
        if (nums.length < 2) return nums.length;

        const arr = [...new Set(nums.sort((a, b) => a - b))];

        let count = 0, maxSequenceLength = 0;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] - arr[i - 1] === 1) {
                count++;
            } else {
                count = 0;
            }
            maxSequenceLength = Math.max(maxSequenceLength, count);
        }

        return maxSequenceLength + 1; 
    }
}
