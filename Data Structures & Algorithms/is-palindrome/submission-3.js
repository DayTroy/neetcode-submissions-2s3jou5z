class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const arr = s.toLowerCase().split('').filter(item => isAvailableSymbols(item));
        let startIndex = 0, endIndex = arr.length - 1;
        while (startIndex < endIndex) {
            if (arr[startIndex] !== arr[endIndex]) return false;
            startIndex++;
            endIndex--;
        }
        return true;
    }
}

function isAvailableSymbols(s) {
    return s !== ' ' && 
           s !== '?' && 
           s !== '-' && 
           s!== '_' && 
           s!== ',' && 
           s!== "'" && 
           s !== '.' &&
           s !== ':'
}
