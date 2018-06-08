/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m=grid.length,n=grid[0].length;
    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            if(i===0 && j!==0){
                grid[i][j] += grid[i][j-1];
            }else if(i!==0 && j===0){
                grid[i][j] += grid[i-1][j];
            }else if(i!==0 && j!==0){
                grid[i][j] += Math.min(grid[i][j-1],grid[i-1][j]);
            }
        }
    }
    return grid[m-1][n-1];
};

/*
    到[i,j]的最短距离 f(i,j) = Math.min(f(i-1,j), f(i,j-1)) + grid[i][j];
    
    i===0 or j===0时 要特殊考虑
*/