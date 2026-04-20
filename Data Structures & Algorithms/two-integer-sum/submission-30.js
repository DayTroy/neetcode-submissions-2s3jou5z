class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // [4,5,6], target = 10

    // 10 - 4 -> 6 : 0
    // 10 - 5 -> 5 : 1
    // 10 - 6 -> 4 : 2

    // 10 - 4 -> 4 : 0
    // 10 - 5 -> 5 : 1
    // 10 - 6 -> 6 : 2
    // [-1,-2,-3,-4,-5]
    // -6 >
    twoSum(nums, target) {
        const indexedNums = nums.map((value, index) => ({ value, index }));
        indexedNums.sort((a, b) => a.value - b.value);

        let startIndex = 0, endIndex = nums.length - 1;

        while (startIndex < endIndex) {
            const sum = indexedNums[startIndex].value + indexedNums[endIndex].value;
            if (sum === target) {
                return [indexedNums[startIndex].index, indexedNums[endIndex].index];
            } else if (sum < target) {
                startIndex++;
            } else {
                endIndex--;
            }
        }
        return [];
    }
}
