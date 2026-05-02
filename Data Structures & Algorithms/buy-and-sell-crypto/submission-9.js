class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuy = prices[0], maxProfit = 0;

        for (let i = 1; i < prices.length; i++) {
            minBuy = Math.min(minBuy, prices[i])
            maxProfit = Math.max(maxProfit, prices[i] - minBuy);
            
        }

        return maxProfit;
    }
}
