class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    // [Hello, World]
    // '5#Hello5#World'
    encode(strs) {        
        return strs.map(str => str.length + '#' + str).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */

    // '5#Hello5#World'
    decode(str) {
        const result = [];
        let i = 0;
        
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            const size = parseInt(str.substr(i, j));
            i = j + 1;
            const item = str.substr(i, size);
            result.push(item);

            i += size;
        }

        return result;
    }
}
