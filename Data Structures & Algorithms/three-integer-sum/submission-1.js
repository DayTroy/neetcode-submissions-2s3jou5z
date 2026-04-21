class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const unique = new Set();
        
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    const sum = nums[i] + nums[j] + nums[k];
                    const items = [nums[i], nums[j], nums[k]];
                    if (sum === 0)
                    {
                        unique.add(JSON.stringify(items.sort((a, b) => a - b)))
                    }
                }
            }
        }

        return [...unique].map(item => JSON.parse(item));
    }
}
