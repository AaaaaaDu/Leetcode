/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var x = [];
    x[0] = 1;
    x[1] = 1;
    for(var i=2;i<n;i++){
        x[i] = x[i-1] + x[i-2];
    }
    return n===1?1:x[n-1]+x[n-2];
}
/*
    设S(n)表示走n级台阶的走法数量。走n级台阶，第一步只有两种选择：可以选择走1阶，然后还有S(n-1)种走法；选择走2阶，那么接下来有S(n-2)种走法。那么S(n) = S(n-1) + S(n-2)。

    所以爬楼梯问题符合斐波那契数列
*/