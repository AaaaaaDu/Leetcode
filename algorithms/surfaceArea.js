/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let res = 0;
    
    grid.forEach((arr, x) => {
        arr.forEach((val, y) => {
            val && (res += val * 4 + 2);
            x > 0 && (res -= Math.min(val, grid[x - 1][y]) * 2);
            y > 0  && (res -= Math.min(val, grid[x][y - 1]) * 2);
        });
    });
    
    return res;
};