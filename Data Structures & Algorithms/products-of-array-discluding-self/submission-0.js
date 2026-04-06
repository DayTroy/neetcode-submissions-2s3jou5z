class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                result.push(nums.slice(1).reduce((prev, acc) => prev * acc))
            } else if (i === nums.length - 1) {
                result.push(nums.slice(0, i).reduce((prev, acc) => prev * acc));
            } else {
                const beforeCurrentItems = nums.slice(0, i);
                const afterCurrentItems = nums.slice(i + 1)

                const innerResult = beforeCurrentItems.concat(afterCurrentItems)

                result.push(innerResult.reduce((prev, acc) => prev * acc));
            }
        }

        return result;
    }
}
