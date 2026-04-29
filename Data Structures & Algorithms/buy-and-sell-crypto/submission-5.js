class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let l = 0, r = l + 1;
    
        while (r < prices.length) {
            if (prices[l] > prices[r]) {
                l = r;
            } else {
                profit = Math.max(profit, prices[r] - prices[l]);
            }
            r++;
        }
        
        return profit;
    }
}
