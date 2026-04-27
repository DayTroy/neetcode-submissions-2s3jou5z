class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // [-1,0,1,2,-1,-4]

    // [[-1, -1, 2], [-1, 0, 1], []]
    // [-4,-1,-1,0,1,2]
    

    threeSum(nums) {
        // const res = [];
        const res = new Set();

        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    const sum = nums[i] + nums[j] + nums[k];

                    if (sum === 0) {
                        res.add(JSON.stringify([nums[i], nums[j], nums[k]]))
                    }
                }
            }
        }

        return [...res].map(item => JSON.parse(item));
    }
}
