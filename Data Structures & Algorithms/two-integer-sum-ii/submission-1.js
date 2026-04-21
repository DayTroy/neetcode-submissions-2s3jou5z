class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (i !== j && numbers[j] + numbers[i] === target) {
                    return [i + 1, j + 1];
                }
            }
        }
    }
}
