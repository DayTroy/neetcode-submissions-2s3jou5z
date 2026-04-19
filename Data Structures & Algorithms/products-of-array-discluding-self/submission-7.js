class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // [1,2,4,6]
    // [1,1,1,1]

    // [1,]

    // [1,1,2,8]

    // [1,24,6,1]

    // [1,24,12,8]

    // [1,2,4,6]
    // [1,2,4,6]
    productExceptSelf(nums) {
        const result = [];
        for (let i = 0; i < nums.length; i++) {
            let factor = 1;

            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {
                    factor *= nums[j];
                }
            }

            result.push(factor);
        }

        return result;
    }
}
