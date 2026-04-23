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
       for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
       }
       return [];
    }
}
