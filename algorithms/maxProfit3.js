/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    if(prices.length === 0) return 0;
    let len = prices.length, dp = [0, -prices[0]];
    
    for(let i = 1; i < len; i++) {
        dp[0] = Math.max(dp[0], dp[1] + prices[i] - fee);
        dp[1] = Math.max(dp[1], dp[0] - prices[i]);
    }
    
    return Math.max(dp[0], dp[1]);
};
/*
    dp 保存每次交易买与卖的最优情况
    dp[0]的状态: 手中有股票需要卖, 所以需要根据dp[1]的情况卖
    dp[1]的状态: 手中没有股票需要买, 所以需要根据dp[0]的情况买
*/