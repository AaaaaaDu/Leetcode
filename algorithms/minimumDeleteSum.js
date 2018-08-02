/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    let dp = [], sum = 0, len1 = s1.length, len2 = s2.length;
    for(let i=0;i<=len1;i++){
        dp[i] = [];
        for(let j=0;j<=len2;j++){
            dp[i][j] = 0;
        }
    }
    for(let i=1;i<=len1;i++){
        console.log(s1[i-1])
        sum += s1[i-1].charCodeAt(0);
        for(let j=1;j<=len2;j++){
            if(i===1) sum += s2[j-1].charCodeAt(0);     
            if(s1[i-1] !== s2[j-1]){
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
            }else{
                dp[i][j] = dp[i-1][j-1] + s1[i-1].charCodeAt(0);
            }
        }
    }
    return sum - 2 * dp[len1][len2];
};