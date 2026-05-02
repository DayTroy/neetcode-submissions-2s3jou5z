class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // "zxyzxyz"
    // pwwkew
    lengthOfLongestSubstring(s) {
        let longestSubstrCount = 0, l = 0;
        let okno = new Set(); 

        for (let r = 0; r < s.length; r++) {
            while (okno.has(s[r])) {
                okno.delete(s[l]);
                l++;
            }

            okno.add(s[r]);

            longestSubstrCount = Math.max(longestSubstrCount, r - l + 1);
        }

        return longestSubstrCount;
    }
}
