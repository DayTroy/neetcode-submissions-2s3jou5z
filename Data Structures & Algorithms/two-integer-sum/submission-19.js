class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const check = new Map();

        for (let i = 0; i < nums.length; i++) {
            let difference = target - nums[i];

            if (check.has(difference)) {
                return [i, check.get(difference)]
            } else {
                check.set(nums[i], i);
            }
        }
    }
}
