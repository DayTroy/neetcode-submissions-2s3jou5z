class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = new Map();
        const freqArr = Array.from({ length: nums.length + 1 }, () => []);

        for (let num of nums) {
            if (frequency.has(num)) {
                frequency.set(num, frequency.get(num) + 1)
            } else {
                frequency.set(num, 1);
            }
        }

        // [1,2,2,3,3,3]

        [, ]

        for (const [key, value] of frequency) {
            freqArr[value].push(key);
        }

        const result = [];

        for (let i = freqArr.length - 1; i >= 0; i--) {
            for (let j = 0; j < freqArr[i].length; j++) {
                if (result.length === k) return result;
                if (freqArr[i].length !== 0) {
                    result.push(freqArr[i][j])
                }
            }
        }

        return result;
    }
}
