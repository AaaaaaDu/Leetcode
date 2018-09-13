/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
    let sum = nums.reduce((sum, val) => sum + val);
    
    if(S > sum || (S + sum) % 2 === 1) return 0; // S必须小于sum, 且 S + sum 是偶数
    
    return subsetSum(nums, (sum + S) / 2)
    
    
    function subsetSum(nums, S) {
        let dp = new Array(S + 1).fill(0);
        dp[0] = 1;
        
        for (let num of nums) {
            for (let i = S; i >= num; i--) {
                dp[i] += dp[i - num];
            }
        }
        return dp[S];
    }
    
};

/*
    这里可以分出两种数字的集合, 前面符号为+的数字集合(P)和前面符号为-的数字集合(N)
    例如: -1+1+1+1+1 = 3 的 P为{1, 1, 1, 1}, N为 {1}
    
    由题可得: S = sum(P) - sum(N);
    那么 S + sum(P) + sum(N) = sum(P) - sum(N) + sum(P) + sum(N);
    即 2 * sum(P) = S + sum(nums);
    
    所以我们的问题就转换为: 找出num的一个子集P，使得sum(P) = (S + sum(nums))/2  
    
    最后动态规划找出sum(P)的组合数

    dp[i]表示和为i的组合数
*/