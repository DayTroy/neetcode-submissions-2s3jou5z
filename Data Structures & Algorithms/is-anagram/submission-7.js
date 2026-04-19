class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const sortedS = s.split('').toSorted();
        const sortedT = t.split('').toSorted();

        for (let i = 0; i < s.length; i++) {
            if (sortedS[i] !== sortedT[i]) return false;
        }

        return true;
    }
}
