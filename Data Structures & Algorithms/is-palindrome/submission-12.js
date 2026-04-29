class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0, r = s.length - 1;

        while (l < r) {
            while (l < r && !this.isAlphanumeric(s[l])) {
                l++;
            }
            
            while (l < r && !this.isAlphanumeric(s[r])) {
                r--;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++;
            r--;
        }

        return true;
    }

    isAlphanumeric(letter){
        return ((letter >= 'a' && letter <= 'z') ||
            (letter >= 'A' && letter <= 'Z') ||
            (letter >= '0' && letter <= '9'));
    }
}
