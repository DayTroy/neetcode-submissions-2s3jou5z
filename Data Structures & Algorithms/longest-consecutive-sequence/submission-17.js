class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // [2,20,4,10,3,4,5]

    longestConsecutive(nums) {
        let maxSeqLen = 0;

        for (let num of nums) {
            let len = 0;
            while(nums.includes(num + len)) {
                len++;
            }
            maxSeqLen = Math.max(len, maxSeqLen);
        }

        return maxSeqLen;
    }
}
