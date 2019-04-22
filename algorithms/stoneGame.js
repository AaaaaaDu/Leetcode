/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    const len = piles.length;
    const dp = new Array(len).fill(0).map(() => new Array(len).fill(0));
    
    for (let i = 0; i< len; i++) {
        dp[i][i] = piles[i];
    }
    
    for(let i = 1; i < len; i++) {
        for(let j = 0; j < len - i; j++) {
            dp[j][j + i] = Math.max(piles[j] - dp[j + 1][j + i], piles[j + i] - dp[j][j + i - 1]);
        }
    }
    
    return dp[0][len - 1] > 0;
};

/*
    dp[i][j]代表从i到j, 亚历克斯赢李的分数
*/
