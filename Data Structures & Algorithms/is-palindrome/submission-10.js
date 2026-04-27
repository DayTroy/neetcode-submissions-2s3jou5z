class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let startIndex = 0, endIndex = s.length - 1;

        while (startIndex < endIndex) {
            while (startIndex < endIndex && !this.isAlphanumeric(s[startIndex])) {
                startIndex++;
            }

            while (endIndex > startIndex && !this.isAlphanumeric(s[endIndex])) {
                endIndex--;
            }

            if (s[startIndex].toLowerCase() !== s[endIndex].toLowerCase()) return false;


            startIndex++;
            endIndex--;
        }
        
        return true;
    }

    isAlphanumeric(letter){
        if ((letter >= 'a' && letter <= 'z') ||
            (letter >= 'A' && letter <= 'Z') ||
            (letter >= '0' && letter <= '9')) {
            return true;
        }
        return false;
    }
}
