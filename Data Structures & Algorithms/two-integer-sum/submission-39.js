class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    twoSum(nums, target) {
        const indexedNums = nums
            .map((value, index) => ({ value, index }))
            .sort((a, b) => a.value - b.value);

        let startIndex = 0, endIndex = nums.length - 1;

        while (startIndex < endIndex) {
            const sum = indexedNums[startIndex].value + indexedNums[endIndex].value;
            if (sum === target) {
                return [indexedNums[startIndex].index, indexedNums[endIndex].index]
            } else if (sum > target) {
                endIndex--;
            } else {
                startIndex++;
            }
        }

        return [];
    }
}
