/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let count = 0;
    board.forEach(function(value, i){
        value.forEach(function(val, j){
           if(val === "X"){
               if((!board[i-1]||board[i-1][j]===".")&&(!board[i][j-1]||board[i][j-1]===".")){
                   count++;
               }
           }
        });
    });
    return count;
};

/*
    只要左1 或者 上1 没有X 就是一个战舰
*/