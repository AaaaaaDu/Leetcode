/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0 || coins.length === 0) return 0;
    
    let len = coins.length, dp = [0];
    
    coins.sort((a, b) => a - b);
    
    for (let i = 1; i < amount + 1; i++) {
        dp[i] = amount + 1;
    }
    
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < len; j++) {
            if (coins[j] > i) break;
            
            dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
        }
    }

    return dp[amount] === amount + 1 ? -1 : dp[amount];
};