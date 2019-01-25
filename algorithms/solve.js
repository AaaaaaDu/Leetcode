/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (board.length === 0 || board[0].length === 0) return;
    let r = board.length, c = board[0].length, 
        queue = [], 
        map = [], 
        dir = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    
    // 初始化map
    for (let i = 0; i < r; i++) {
        map[i] = [];
        for (let j = 0; j < c; j++) {
            map[i][j] = 0;
        }
    }
    
    // 初始化queue, map
    for (let i = 0; i < r; i++) {
        if (board[i][0] === 'O') {
            queue.push(i + "-" + 0);
            map[i][0] = 1;
        }
        if (board[i][c - 1] === 'O') {
            queue.push(i + "-" + (c - 1));
            map[i][c - 1] = 1;
        }
    }
    for (let i = 1; i < c - 1; i++) {
        if (board[0][i] === 'O') {
            queue.push(0 + "-" + i);
            map[0][i] = 1;
        }
        if (board[r - 1][i] === 'O') {
            queue.push((r - 1) + "-" + i);
            map[r - 1][i] = 1;
        }
    }

    // 广度优先遍历
    while (queue.length) {
        let cur = queue.shift().split('-'),  x = +cur[0], y = +cur[1];
        
        for (let i = 0; i < 4; i++) {
            let otherX = x + dir[i][0], otherY = y + dir[i][1];
            
            if (otherX < 0 || otherX >= r || otherY < 0 || otherY >= c) continue;
            
            if (board[otherX][otherY] === 'O' && !map[otherX][otherY]) {
                queue.push(otherX + "-" + otherY);
                map[otherX][otherY] = 1;
            }
        }
    }
    
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (map[i][j] === 0) board[i][j] = 'X';
        }
    }
};