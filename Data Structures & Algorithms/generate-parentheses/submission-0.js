class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        function backtrack(path, opened, closed) {
            if (path.length === n * 2) {
                res.push(path.join(''));
                return;
            }

            if (opened < n) {
                path.push('(')
                backtrack(path, opened + 1, closed)
                path.pop();
            }

            if (closed < opened) {
                path.push(')')
                backtrack(path, opened, closed + 1)
                path.pop();
            }      
        }

        backtrack([], 0, 0);

        return res;
    }
}
