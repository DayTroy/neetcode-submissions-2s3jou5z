class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // [2,20,4,10,3,4,5]

    // [2,3,4,4,5,10,20]

    longestConsecutive(nums) {
        if (nums.length < 2) return nums.length;
        let maxSequenceLength = 0, count = 0;

        nums = [...new Set(nums.sort((a, b) => a - b))];

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] - nums[i - 1] === 1) {
                count++;
                maxSequenceLength = Math.max(maxSequenceLength, count)
            } else {
                count = 0;
                maxSequenceLength = Math.max(maxSequenceLength, count)
            }
        }

        return maxSequenceLength + 1;
    }
}
