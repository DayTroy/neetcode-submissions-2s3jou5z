class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = []
        function backtrack(start, path) {
            if (start === s.length) {
                res.push([...path]);
                return;
            }

            for (let i = start; i < s.length; i++) {
                const substring = s.slice(start, i + 1);

                if (substring !== substring.split('').reverse().join('')) continue;

                path.push(substring);
                backtrack(i + 1, path);
                path.pop();
            }

        }

        backtrack(0, []);
        return res;
    }
}
