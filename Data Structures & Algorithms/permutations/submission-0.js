class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        
        function backtrack(path) {
            if (path.length === nums.length) {
                res.push([...path]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (path.includes(nums[i])) continue;
                path.push(nums[i]);
                backtrack(path);
                path.pop();
            }
        }
        backtrack([])

        return res;
    }
}
