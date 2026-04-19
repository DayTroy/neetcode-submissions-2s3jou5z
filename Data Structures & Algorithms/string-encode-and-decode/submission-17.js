class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    // ["Hello","World"]
    // '5,5#HelloWorld'
    encode(strs) {
        if (strs.length === 0) return '';
        
        return strs.map(str => str.length) + '#' + strs.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === '') return [];
        const result = [];

        const sizes = str
            .slice(0, str.indexOf('#'))
            .split(',')
            .map(size => parseInt(size));

        let startIndex = str.indexOf('#') + 1;

        for (let size of sizes) {
            const item = str.substr(startIndex, size);
            result.push(item);
            startIndex += size;
        }

        return result;
    }
}
