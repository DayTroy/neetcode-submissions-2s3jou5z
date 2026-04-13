class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const data = new Map();

        for (let item of nums) {
            if (data.has(item)) {
                data.set(item, data.get(item) + 1);
            } else {
                data.set(item, 1);
            }
        }

        return [...data]
            .map(item => {
                return {
                    element: item[0],
                    frequency: item[1]
                }
            })
            .toSorted((a, b) => b.frequency - a.frequency)
            .slice(0, k)
            .map(item => item.element);
    }
}
