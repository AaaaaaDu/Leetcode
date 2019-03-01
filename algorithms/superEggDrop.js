/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
    const dp = [];
    
    for (let i = 0; i <= K; i++) {
        dp[i] = new Array(N).fill(0);
    }
    
    for (let m = 1; m <= N; m++) {
        dp[0][m] = 0;

        for (let k = 1; k <= K; k++) {
            dp[k][m] = dp[k - 1][m - 1] + dp[k][m - 1] + 1;
            
            if (dp[k][m] >= N) return m;
        }
    }
    
    return N;
};