/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const queue = [], r = grid.length, c = grid[0].length,
          dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let count = 0;
    
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j] === 2) queue.push([i, j]);
        }
    }
        
    while (queue.length) {
        const len = queue.length;
        
        for (let i = 0; i < len; i++) {
            const val = queue.pop();
            
            for (let j = 0; j < 4; j++) {
                const x = val[0] + dir[j][0],
                      y = val[1] + dir[j][1];
                
                if (grid[x] && grid[x][y] === 1) {
                    grid[x][y] = 2;
                    queue.unshift([x, y]);
                } 
            }
        }
        
        count++;
    }
    
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j] === 1) return -1;
        }
    }
    
    return count > 0 ? count - 1 : count;
};