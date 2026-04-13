class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(str => str.length + '#' + str).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        
        let i = 0;
        while (i < str.length) {
            let j = i;

            while (str[j] !== '#') {
                j++;
            }

            const size = parseInt(str.substr(i, j));

            res.push(str.substr(j + 1, size));

            i = size + j + 1;
        }

        return res;
    }
}
