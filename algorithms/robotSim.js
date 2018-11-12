/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let dir = [[0,1],[1,0],[0,-1],[-1,0]], map = new Map(), curDir = 0, x = 0, y = 0, max = 0;
    obstacles.forEach(val => {
        map.set(val[0] + "," + val[1], 1);
    });
    
    commands.forEach(val => {
        if (val === -1) {
            curDir = (curDir + 1) % 4;
        } else if(val === -2) {
            curDir = (curDir + 3) % 4;
        } else {
            while(val) {
                if (map.has((x + dir[curDir][0]) + "," + (y + dir[curDir][1]))) break;
                
                x += dir[curDir][0];
                y += dir[curDir][1];
                
                max = Math.max(max, x*x + y*y);
                
                val--;
            }
        }
    });
    
    return max
};

/*
    用坐标来表示方向不仅可以很好的确定方向之间的关系，而且还能确定此方向上的增量。
    [0,1],[1,0],[0,-1],[-1,0]分别代表北、东，南，西
*/