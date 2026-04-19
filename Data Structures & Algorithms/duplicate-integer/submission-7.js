class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const data = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (data.has(nums[i])) {
                return true;
            } else {
                data.set(nums[i], 1);
            }
        }

        return false;
    }
}
