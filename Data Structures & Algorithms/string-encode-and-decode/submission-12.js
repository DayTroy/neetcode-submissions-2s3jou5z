class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    // length#stringlength#stringlength#string
    encode(strs) {
        return strs.map(str => `${str.length}#${str}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            
            while (str[j] !== '#') {
                j += 1;
            }

            let size = parseInt(str.substring(i, j));
            i = j + 1;

            result.push(str.substring(i, i + size));

            i += size;
        }

        return result
    }
}
