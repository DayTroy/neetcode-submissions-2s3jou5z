class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const dataS = new Map();
        const dataT = new Map();

        for (let i = 0; i < s.length; i++) {
            if (dataS.has(s[i])) {
                dataS.set(s[i], dataS.get(s[i]) + 1);
            } else {
                dataS.set(s[i], 1);
            }

            if (dataT.has(t[i])) {
                dataT.set(t[i], dataT.get(t[i]) + 1);
            } else {
                dataT.set(t[i], 1);
            }
        }

        for (const [key, value] of dataS) {
            if (value !== dataT.get(key)) return false;
        }

        return true;
    }
}
