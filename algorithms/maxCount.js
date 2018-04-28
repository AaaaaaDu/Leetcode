/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if(ops.length === 0) return m*n;
    
    var x = Number.MAX_VALUE, y = Number.MAX_VALUE;
    
    for(var i=0,len=ops.length;i<len;i++){
        x = Math.min(x,ops[i][0]);
        y = Math.min(y,ops[i][1]);
    }
    
    return x*y;
};
/*
    由于每次操作都由左上角开始,
    所以最大的整数一定出现在左上角
    大小为最小的ops[i][0]*ops[j][1]
*/