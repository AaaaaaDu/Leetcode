/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let dIndex = 0, dp = new Array(366).fill(0), dLen = days.length;
    
    for (let i = 1; i < 366; i++) {
        if (i === days[dIndex]) {
            dp[i] = dp[i - 1] + costs[0];
            dp[i] = Math.min(dp[i], dp[Math.max(i - 7, 0)] + costs[1]);
            dp[i] = Math.min(dp[i], dp[Math.max(i - 30, 0)] + costs[2]);
            dIndex++;
            
            if (dIndex === dLen) return dp[i];
        } else {
            dp[i] = dp[i - 1];
        }
    }
    
    return dp[365];
};