class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // [2,20,4,10,3,4,5]
    // [2,3,4,5]


    longestConsecutive(nums) {
        if (nums.length < 2) return nums.length;

        nums = [...new Set(nums.sort((a, b) => a - b))];

        let count = 1, maxSequenceLength = 1;


        for (let i = 1; i < nums.length; i++) {
            if (nums[i] - nums[i - 1] <= 1) {
                count++;
                maxSequenceLength = Math.max(count, maxSequenceLength);
            } else {
                count = 1;
            }
        }
        
        return maxSequenceLength;
    }
}
