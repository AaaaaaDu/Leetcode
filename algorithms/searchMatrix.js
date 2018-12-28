/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false;
    
    let row = matrix.length - 1, col = 0, clen = matrix[0].length;

    while (row >= 0 && col !== clen) {
        if (matrix[row][col] > target) {
            row--;
        } else if (matrix[row][col] < target) {
            col++;
        } else {
            return true;
        }
    }
    
    return false;
};