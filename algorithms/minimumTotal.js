/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if (triangle.length === 0) return 0;
    
    const len = triangle.length, dp = [triangle[0][0]];
    
    for(let i = 0; i < len; i++) {
        dp[i] = triangle[len - 1][i];
    }

    for(let i = len - 2; i >= 0; i--){
        for(let j = 0; j <= i; j++) {
            dp[j] = triangle[i][j] + Math.min(dp[j], dp[j+1]);
        }
    }
    
    return dp[0];
};