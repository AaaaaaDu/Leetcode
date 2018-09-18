/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    let rLen = matrix.length, cLen = matrix[0].length, q = [], dirs = [[0, -1], [0, 1], [1, 0], [-1, 0]];
    
    for(let i = 0; i < rLen; i++) {
        for(let j = 0; j < cLen; j++) {
            matrix[i][j] === 0 ? q.unshift([i, j]) : matrix[i][j] = -1;
        }
    }
    
    while(q.length) {
        const first = q.pop(), x = first[0], y = first[1];
        for(let dir of dirs) {
            const newX = x + dir[0], newY = y + dir[1];
            
            if(newX >= 0 && newX < rLen && newY >= 0 && newY < cLen && matrix[newX][newY] === -1) {
                matrix[newX][newY] = matrix[x][y] + 1;
                q.unshift([newX, newY]);
            }

        }
    }
    return matrix;
};

// 求最短距离用队列进行广度优先搜索