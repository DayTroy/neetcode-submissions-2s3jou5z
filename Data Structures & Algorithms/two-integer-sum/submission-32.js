class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // [3,4,5,6]
    //3: 4
    //4: 3
    //5: 2

    //

    twoSum(nums, target) {
        const data = new Map();

        for (let i = 0; i < nums.length; i++) {
            const difference = target - nums[i];

            if (data.has(difference)) {
                return [data.get(difference), i];
            } else {
                data.set(nums[i], i);
            }
        }
    }
}
