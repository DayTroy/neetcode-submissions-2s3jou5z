class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // [2,20,4,10,3,4,5]

    // [2,3,4,5,10,20]

    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        const arr = [...new Set(nums.toSorted((a, b) => a - b))];
        let maxSequenceLength = 1;
        let count = 1;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] - arr[i - 1] <= 1) {
                count++;
            } else {
                maxSequenceLength = Math.max(maxSequenceLength, count);
                count = 1;
            }
        }

        return Math.max(maxSequenceLength, count);
    }
}
