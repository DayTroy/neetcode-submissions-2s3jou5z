class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // [2,20,4,10,3,4,5]

    // [2,3,4,4,5,10,20]

    longestConsecutive(nums) {
        let maxSequenceLength = 0, count = 0;

        for (let i = 0; i < nums.length; i++) {
            let len = 0;
            while (nums.includes(nums[i] + len)) {
                len++
            };
            maxSequenceLength = Math.max(maxSequenceLength, len)
        }

        return maxSequenceLength;
    }
}
