/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    var count = 0;
    for (var i = 0, len1 = grid.length; i < len1; i++) {
        for (var j = 0, len2 = grid[0].length; j < len2; j++) {
            if (grid[i][j] === 1) {
                count += 4;
                if (i!==0 && grid[i - 1][j] === 1) count--;
                if (i!==len1-1 && grid[i + 1][j] === 1) count--;
                if (j!==0 && grid[i][j - 1] === 1) count--;
                if (j!==len2-1 && grid[i][j + 1] === 1) count--;
            }
            //console.log(i,j,count)
        }
    }
    return count;
};