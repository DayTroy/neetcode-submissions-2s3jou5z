class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "";
        let result = '';

        for (let i = 0; i < strs.length; i++) {
            if (strs.length - i === 1) {
                result += `${strs[i].length}`;
            } else {
                result += `${strs[i].length},`;
            }
        }
        return result + '#' + strs.join(',')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str == "") return [];

        let result = [], startIndex = str.indexOf('#') + 1;

        const sizes = str
            .slice(0, str.indexOf('#'))
            .split(',')
            .map(size => parseInt(size))

        for (let size of sizes) {
            result.push(str.substr(startIndex, size));
            startIndex += size + 1;
        }

        return result;
    }
}
