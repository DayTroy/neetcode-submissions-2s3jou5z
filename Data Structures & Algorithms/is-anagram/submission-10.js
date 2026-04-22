class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    isAnagram(s, t) {
        const freqS = new Map();
        const freqT = new Map();

        if (s.length !== t.length) return false;
        
        for (let i = 0; i < s.length; i++) {
            if (freqS.has(s[i])) {
                freqS.set(s[i], freqS.get(s[i]) + 1)
            } else {
                freqS.set(s[i], 1)
            }
            if (freqT.has(t[i])) {
                freqT.set(t[i], freqT.get(t[i]) + 1)
            } else {
                freqT.set(t[i], 1)
            }
        }

        for (const [key, value] of freqS) {
            if (freqT.get(key) !== value) return false;
        }

        return true;
    }
}
