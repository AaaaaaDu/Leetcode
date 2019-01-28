/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (!matrix.length || !matrix[0].length) return 0;
    
    let r = matrix.length, c = matrix[0].length,
        res = 1,
        dp = [],
        queue = [],
        dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    for (let i = 0; i < r; i++) {
        dp[i] = [];
        for (let j = 0; j < c; j++) {
            dp[i][j] = 0;
        }
    }
    
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            let count = 1;
            queue.push([i, j]);
            // 类似二叉树层序遍历的方式，先出当前queue的长度，然后遍历跟长度相同的次数
            while (queue.length) {
                count++;
                let len = queue.length;
                // 遍历当前层的所有节点
                for (let k = 0; k < len; k++) {
                    let cur = queue.shift();
                    // 遍历四个方向
                    for (let d of dir) {
                        let x = cur[0] + d[0], y = cur[1] + d[1];
                        
                        if (x < 0 || x >= r || y < 0 || y >= c || matrix[x][y] <= matrix[cur[0]][cur[1]] || count <= dp[x][y]) continue;
                        
                        dp[x][y] = count;
                        queue.push([x, y]);
                        res = Math.max(res, count);
                    }
                }
            }
        }
    }
    
    return res;
};

