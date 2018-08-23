/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid == null)  return 0;  
    var num = 0;  
    for (var i = 0; i < grid.length; i++) {  
        for (var j = 0; j < grid[i].length; j++) {  
            if (grid[i][j] === '1') {  
                num++;  
                grid = change(grid, i, j);  
            }  
        }  
    }  
    return num;
};
function change(grid,i,j){
        grid[i][j] = '0'; 
        if (i > 0 && grid[i - 1][j] === '1') {  
            grid = change(grid, i - 1, j);  
        }  
        if (j < grid[i].length - 1 && grid[i][j + 1] === '1') {  
            grid = change(grid, i, j + 1);  
        }  
        if (j > 0 && grid[i][j - 1] === '1') {  
            grid = change(grid, i, j - 1);  
        }  
        if (i < grid.length - 1 && grid[i + 1][j] === '1') {  
            grid = change(grid, i + 1, j);  
        }  
        return grid;
}
/*
    1.循环2维数组，找到其值为1的元素，num++，
    2.然后递归改变其上下左右为1的元素值为0，
*/