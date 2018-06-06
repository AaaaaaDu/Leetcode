/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if(n===0) return [];
    //left:左边界 right:右边界 top,bot同理 , val:当前值, dx,dy前进的方向,  x,y当前坐标
    var left=0, right=n-1, top=0, bot=n-1, val=1, dx=1, dy=0 , x=0, y=0;  
    var res = [];
    for(var i=0;i<n;i++){
        res[i] = [];
        for(var j=0;j<n;j++){
            res[i][j] = 0;
        }
    }
    while(val <= n*n)  
    {  
        res[y][x] = val++;  
        x += dx, y += dy;  
        if(x>right) dx=0, dy=1, x--, y++, top++;  
        else if(x<left) dx=0, dy=-1, x++, y--, bot--;  
        else if(y>bot) dx=-1, dy=0, x--, y--, right--;  
        else if(y<top) dx=1, dy=0, x++, y++, left++;  
    }  
    return res;  
    
};