/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    var min=[0,0];
    for(var i=2,len=cost.length;i<len+1;i++){
        min[i] = Math.min(min[i-2]+cost[i-2],min[i-1]+cost[i-1]);
    }
    return min.pop();
};

/*
    min用于保存到相应层数的最小花费, min[i] 为 i 层的最小花费
    min[i] = Math.min(min[i-2]+cost[i-2],min[i-1]+cost[i-1]);
*/