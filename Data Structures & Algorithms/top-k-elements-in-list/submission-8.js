class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (const num of nums) {
            if (count.has(num)) {
                count.set(num, count.get(num) + 1)
            } else {
                count.set(num, 1)
            }
        }

        for (const [key, value] of count) {
            freq[value].push(key);
        }
        
        const res = [];
        let i = res.length - 1;
        
        for (let i = freq.length - 1; i > 0; i--) {
            for (let j = 0; j < freq[i].length; j++) {
                res.push(freq[i][j]);
                if (res.length === k) return res;
            }
        }

        return res;
    }
}
