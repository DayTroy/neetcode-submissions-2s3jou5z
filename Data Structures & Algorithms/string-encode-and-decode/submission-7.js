class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return '';
        
        let sizes = [], res = '';

        for (let s of strs) {
            sizes.push(s.length);
        }

        for (let sz of sizes) {
            res += sz + ',';
        }
        res += '#';
        for (let s of strs) {
            res += s;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str == "") return [];
  
        const sizes = str.slice(0, str.indexOf('#') - 1).split(',').map(size => parseInt(size));
        const result = [];
        let i = str.indexOf('#') + 1;

        for (let sz of sizes) {
            result.push(str.substr(i, sz));
            i += sz;
        }

        return result;
    }
}
