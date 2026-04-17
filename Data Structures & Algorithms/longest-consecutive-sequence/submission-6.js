class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        const arr = [...new Set(nums.toSorted((a, b) => a - b))];
        let maxSequenceLength = 0;
        let count = 0;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] - arr[i - 1] <= 1) {
                count++;
            } else {
                maxSequenceLength = Math.max(maxSequenceLength, count);
                count = 0;
            }
        }

        return Math.max(maxSequenceLength, count) + 1;
    }
}
