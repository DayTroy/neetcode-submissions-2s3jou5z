class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length < 1) return '';

        const sizes = strs.map(str => str.length);

        return sizes.join(',') + '#' + strs.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === '') return [];
        
        const res = [];
        let startIndex = str.indexOf('#') + 1;

        const sizes = str
            .slice(0, str.indexOf('#'))
            .split(',')
            .map(item => parseInt(item));
        
        for (let size of sizes) {
            res.push(str.substr(startIndex, size));
            startIndex += size;
        }

        return res;
    }
}
