class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res = [];

        nums.sort((a, b) => a - b);

        function backtrack(path, startIndex) {
            res.push([...path]);

            for (let i = startIndex; i < nums.length; i++) {
                if (i > startIndex && nums[i] === nums[i - 1]) {
                    continue;
                }

                path.push(nums[i]);
                backtrack(path, i + 1);
                path.pop();
            }
        }

        backtrack([], 0);
        return res;
    }
}
