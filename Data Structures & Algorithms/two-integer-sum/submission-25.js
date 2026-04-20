class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // [4,5,6], target = 10

    // 10 - 4 -> 6 : 0
    // 10 - 5 -> 5 : 1
    // 10 - 6 -> 4 : 2

    // 10 - 4 -> 4 : 0
    // 10 - 5 -> 5 : 1
    // 10 - 6 -> 6 : 2
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (i !== j && nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }

        return [];
    }
}
