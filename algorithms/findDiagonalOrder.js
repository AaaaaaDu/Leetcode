/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if(matrix.length === 0 || matrix[0].length === 0) return [];
    let res = [matrix[0][0]], rlen = matrix.length - 1, clen = matrix[0].length - 1, i = 0, j = 0, direction = true;
    
    while(i !== rlen || j !== clen) {
        //转向判断
        if (i === 0 && j < clen && direction) {
            j++;
            direction = !direction;
        } else if (j === 0 && i < rlen && !direction) {
            i++;
            direction = !direction;
        } else if (i === 0 && j === clen && direction) {
            i++;
            direction = !direction;
        } else if (j === 0 && i === rlen && !direction) {
            j++;
            direction = !direction;
        } else if (i === rlen && j !== clen && !direction) {
            j++;
            direction = !direction;
        } else if (j === clen && i !== rlen && direction) {
            i++;
            direction = !direction;
        } else {
            if (direction) {
                i--;
                j++;
            } else {
                i++;
                j--;
            }
        }
        
        
        res.push(matrix[i][j]);
    }
    return res;
};