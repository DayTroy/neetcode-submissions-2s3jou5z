class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // [2,20,4,10,3,4,5]

    longestConsecutive(nums) {
        const check = new Set(nums);
        let maxSequenceLength = 0;

        for (let num of nums) {
            let count = 0;
            while(check.has(num + count)) {
                count++;
                maxSequenceLength = Math.max(count, maxSequenceLength);
            }
        }
        return maxSequenceLength;
    }
}
