class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // [4,5,6], target = 10

    // 
    twoSum(nums, target) {
        const indexedNums = nums.map((num, index) => ({ num, index }));
        indexedNums.sort((a, b) => a.num - b.num);
        let startIndex = 0, endIndex = nums.length - 1;

        for (let i = 0; i < nums.length; i++) {
            const sum = indexedNums[startIndex].num + indexedNums[endIndex].num;
            if (sum === target) {
                return [indexedNums[startIndex].index, indexedNums[endIndex].index];
            } else if (sum > target) {
                endIndex--;
            } else {
                startIndex++;
            }
        }
    }
}
