class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let startIndex = 0, endIndex = numbers.length - 1;
        for (let i = 0; i < numbers.length; i++) {
            const sum = numbers[startIndex] + numbers[endIndex];
            if (sum === target) {
                return [startIndex + 1, endIndex + 1];
            } else if (sum > target) {
                endIndex--;
            } else {
                startIndex++;
            }
        }
    }
}
