class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const data = new Map();

        for (let i = 0; i < nums.length; i++) {
            data.set(nums[i], 0)
        }

        for (let i = 0; i < nums.length; i++) {
            if (data.has(nums[i])) {
                data.set(nums[i], data.get(nums[i]) + 1)
            }
        }

        const result = [...data]
            .map(item => { 
                return {
                element: item[0], frequency: item[1] 
                }
            })
            .toSorted((a, b) => b.frequency - a.frequency)
            .slice(0, k)
            .map(item => item.element)

        return result;
    }
}
