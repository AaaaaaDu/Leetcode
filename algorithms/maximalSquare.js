/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (matrix.length === 0) return 0;
    
    const rlen = matrix.length, clen = matrix[0].length;
    const dp = [];
    let res = 0;
    
    for (var i = 0; i < rlen; i++) {
        dp[i] = [];
    }

    for(let i = 0; i < rlen; ++i) {
        for(let j = 0; j < clen; ++j) {
            if (matrix[i][j] === '1') {
                dp[i][j] = Math.min(i && j ? dp[i - 1][j - 1] : 0, i ? dp[i - 1][j] : 0, j ? dp[i][j - 1] : 0) + 1;
                res = Math.max(res, dp[i][j]);
            } else {
                dp[i][j] = 0;
            }
        }
    }
    
    return res *res;
};