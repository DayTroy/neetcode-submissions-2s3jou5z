class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const arr = s.split('').filter(item => this.isAlphanumeric(item));
        let startIndex = 0, endIndex = arr.length - 1;

        while (startIndex < endIndex) {
            if (arr[startIndex].toLowerCase() !== arr[endIndex].toLowerCase()) return false;
            startIndex++;
            endIndex--;
        }
        return true;
    }

    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }
}
