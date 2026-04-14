class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    // [1,2,4,6]
    // [1,1,1,1]

    // [1,1,2,8]

    // [1,2,8,48]

    productExceptSelf(nums) {
        const prefix = new Array(nums.length).fill(1);
        const suffix = new Array(nums.length).fill(1);
        const result = [];

        for (let i = 1; i < nums.length; i++) {
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            suffix[i] = nums[i + 1] * suffix[i + 1];
        }

        for (let i = 0; i < nums.length; i++) {
            result.push(prefix[i] * suffix[i]);
        }

        return result;
    }
}
