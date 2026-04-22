class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = new Map();

        for (let num of nums) {
            if (frequency.has(num)) {
                frequency.set(num, frequency.get(num) + 1)
            } else {
                frequency.set(num, 1);
            }
        }

        return [...frequency]
            .sort((a, b) => b[1] - a[1])
            .map(item => item[0])
            .slice(0, k);
    }
}
