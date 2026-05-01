class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // "zxyzxyz"

    // pwwkew
    lengthOfLongestSubstring(s) {
        let l = 0, r = l + 1, res = 0, count = 0;
        
        for (let i = 0; i < s.length; i++) {
            let check = '';
            for (let j = i; j < s.length; j++) {
                if (check.includes(s[j])) break;
                check += s[j];
            }
            res = Math.max(res, check.length);
        }

        return res;
    }
}
