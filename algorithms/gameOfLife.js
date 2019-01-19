/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let r = board.length, c = board[0].length,
        dx = [-1, -1, -1, 0, 1, 1, 1, 0],
        dy = [-1, 0, 1, 1, 1, 0, -1, -1];
    
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            let count = 0; // 该坐标周围活细胞的数量
            // 遍历周围8个方向
            for (let k = 0; k < 8; k++) {
                let x = i + dx[k], y = j + dy[k];
                
                if (x >= 0 && x < r && y >= 0 && y < c && (board[x][y] === 1 || board[x][y] === 2)) {
                    count++;
                }
            
            }
            
            // 根据count, 更新当前坐标状态
            if (board[i][j] && (count < 2 || count > 3)) {
                board[i][j] = 2;
            } else if (!board[i][j] && count == 3) {
                board[i][j] = 3;
            }
        }
    }
    
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            board[i][j] %= 2;
        }
    }
};
/*
    0 表示  当前为死细胞  转化后为  死细胞
    1 表示  当前为活细胞  转化后为  活细胞
    2 表示  当前为活细胞  转化后为  死细胞
    3 表示  当前为死细胞  转化后为  活细胞
*/