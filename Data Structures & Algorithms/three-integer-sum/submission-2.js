class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const data = new Set();

        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        data.add(JSON.stringify([nums[i], nums[j], nums[k]]))
                    }
                }
            }
        }

        return [...data].map(item => JSON.parse(item));
    }
}
