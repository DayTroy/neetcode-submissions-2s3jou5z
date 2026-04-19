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
    twoSum(nums, target) {
        const data = new Map();

        for (let i = 0; i < nums.length; i++) {
            const difference = target - nums[i];
            if (data.has(difference)) {
               return [data.get(difference), i];
            } else {
                data.set(nums[i], i)
            }
        }
        return [];
    }
}
