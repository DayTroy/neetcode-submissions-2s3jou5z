class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = new Map();

        for (let i = 0; i < strs.length; i++) {
            const count = new Array(26).fill(0);

            for(let c of strs[i]) {
              count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            const key = count.join(',');

            if (result.has(key)) {
                result.set(key, [...result.get(key), strs[i]])
            } else {
                result.set(key, [strs[i]]);
            }
        }

        return [...result.values()];
    }
}
