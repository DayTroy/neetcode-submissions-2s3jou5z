class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const x = s.split('').toSorted().join('');
        const y = t.split('').toSorted().join('');
        if (x === y) {
            return true
        }
        return false;
    }
}
