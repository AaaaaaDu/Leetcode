/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    var rMax = [], cMax = [], len = grid.length, sum = 0;
    for(var i=0;i<len;i++){
        rMax.push(0);
        cMax.push(0);
        for(var j=0;j<len;j++){
            sum += grid[i][j];
            rMax[i] = Math.max(rMax[i],grid[i][j]);
            cMax[i] = Math.max(cMax[i],grid[j][i]);
        }
    }
    for(var i=0;i<len;i++){
        for(var j=0;j<len;j++){
            sum -= Math.min(rMax[i],cMax[j])
        }
    }
    return -sum;
};