/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (board.length === 0) return false;
    let rlen = board.length, clen = board[0].length, wlen = word.length, visited = [];
    
    for (let i = 0; i < rlen; i++) {
        visited[i] = [];
        for (let j = 0; j < clen; j++) {
            visited[i][j] = 0;
        }
    }
    
    for (let i = 0; i < rlen; i++) {
        for (let j = 0; j < clen; j++) {
            if (help(i, j, 0)) return true;
        }
    }
    
    return false;
    
    function help(i, j, cur) {
        if (i < 0 || i >= rlen || j < 0 || j >= clen || visited[i][j] || board[i][j] !== word[cur]) return false;
        if (cur === wlen - 1 && board[i][j] === word[cur]) return true;
        
        visited[i][j] = 1;
        
        let res = help(i - 1, j, cur + 1) || help(i, j - 1, cur + 1) || help(i, j + 1, cur + 1) || help(i + 1, j, cur + 1);
        
        visited[i][j] = 0;
        
        return res;
    }
    
};