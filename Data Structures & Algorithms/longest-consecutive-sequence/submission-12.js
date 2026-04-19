class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // [2,20,4,10,3,4,5]

    // [2,20,4,10,3,5]
    // [2,3,4,5]
    longestConsecutive(nums) {
        const data = new Set(nums);
        let longest = 0;

        for (let n of nums) {
            if (!data.has(n - 1)) {
                let length = 0;
                while(data.has(n + length)) {
                    length += 1;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}
