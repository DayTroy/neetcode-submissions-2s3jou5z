class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sMap = new Map();
        const tMap = new Map();

        if (s.length !== t.length) return false;

        for (let sItem of s) {
            if (sMap.has(sItem)) {
                sMap.set(sItem, sMap.get(sItem) + 1);
            } else {
                sMap.set(sItem, 1);
            }
        }

        for (let tItem of t) {
            if (tMap.has(tItem)) {
                tMap.set(tItem, tMap.get(tItem) + 1);
            } else {
                tMap.set(tItem, 1);
            }
        }

        for (const [key, value] of sMap) {
            if (value !== tMap.get(key)) {
                return false
            }
        }

        return true;
    }
}
