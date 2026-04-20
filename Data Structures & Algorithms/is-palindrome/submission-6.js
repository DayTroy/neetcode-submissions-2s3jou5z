class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let sArr = s
            .split('')
            .filter(letter => this.isAlphaNumeric(letter))
            .map(letter => letter.toLowerCase());
        let startIndex = 0, endIndex = sArr.length - 1;


        while (startIndex < endIndex) {
            if (sArr[startIndex] !== sArr[endIndex]) {
                return false;
            }
            startIndex++;
            endIndex--;
        }

        return true;
    }

    isAlphaNumeric(symbol) {
        if (
            (symbol >= 'a' && symbol <= 'z') ||
            (symbol >= 'A' && symbol <= 'Z') ||
            (symbol >= '0' && symbol <= '9')) return true;
        return false;
    }
}
