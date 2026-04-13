class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [];
        for (let i = 0; i < nums.length; i++) {
            let factor = 1;
            for (let j = 0; j < nums.length; j++) {
                if (j !== i) {
                    factor *= nums[j];
                }
            }
            res.push(factor);
        }

        return res;
    }
}
