class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map();

        for (let item of strs) {
            const key = item.split('').toSorted().join('');

            if (res.has(key)) {
                res.set(key, [...res.get(key), item]);
            } else {
                res.set(key, [item]);
            }
        }

        return [...res.values()];
    }
}
