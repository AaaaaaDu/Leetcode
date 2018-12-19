/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    if (envelopes.length === 0) return 0;
    // dp 为最长升序子序列
    let len = envelopes.length, dp = [];
    
    envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    dp[0] = envelopes[0][1];

    for (let i = 1; i < len; i++) {
        // 对dp进行二分查找
        let left = dp.length, right = 0;
        
        while(left > right) {
            let mid = ~~((left + right) / 2);
            dp[mid] < envelopes[i][1] ? right = mid + 1 : left = mid;
        }
        
        dp[left] = envelopes[i][1];
    }

    return dp.length;
};
/*
    将宽度升序, 宽度相同高度降序排列之后, 就变成了求高度的最长升序子序列长度的问题
*/