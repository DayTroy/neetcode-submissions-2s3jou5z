class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
       let startIndex = 0, endIndex = numbers.length - 1;

       while (startIndex < endIndex) {
            const sum = numbers[startIndex] + numbers[endIndex];

            if (sum === target) {
                return [startIndex + 1, endIndex + 1];
            } else if (sum > target) {
                endIndex--;
            } else {
                startIndex++;
            }
       }

        return [];
    }
}
