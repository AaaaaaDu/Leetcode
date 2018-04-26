/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var max=0;  
    for(var i=0;i<grid.length;i++)  {  
        for(var j=0;j<grid[0].length;j++)  
        {  
            if(1==grid[i][j])  
                max=Math.max(max,Dfs(grid,i,j));  
        }  
    }  
    return max; 
};
function Dfs(grid,i,j){
    if(i>=0&&i<grid.length&&j>=0&&j<grid[0].length&&grid[i][j]==1){  
        grid[i][j]=0;  
        return 1+Dfs(grid,i+1,j)+Dfs(grid,i-1,j)+Dfs(grid,i,j+1)+Dfs(grid,i,j-1);  
    }else{
        return 0;  
    }
}