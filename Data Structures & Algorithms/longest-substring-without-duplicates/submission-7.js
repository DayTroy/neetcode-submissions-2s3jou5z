class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // "zxyzxyz"
    
    // pwwkew
    lengthOfLongestSubstring(s) {
        let longestSubstrCount = 0;

        for (let i = 0; i < s.length; i++) {
            let res = '';
            for (let j = i; j < s.length; j++) {
                if (res.includes(s[j])) break;
                res += s[j];
            }
            longestSubstrCount = Math.max(longestSubstrCount, res.length);
        }

        return longestSubstrCount;
    }
}
