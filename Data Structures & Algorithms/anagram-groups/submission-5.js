class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    // ["act","pots","tops","cat","stop","hat"]

    groupAnagrams(strs) {
        let data = new Map();

        for (let i = 0; i < strs.length; i++) {
            const count = new Array(26).fill(0);

            for (let letter of strs[i]) {
                count[letter.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            const key = count.join(',');

            if (!data.has(key)) data.set(key, []);
                data.get(key).push(strs[i]);
        }

        return [...data.values()];
    }
}
