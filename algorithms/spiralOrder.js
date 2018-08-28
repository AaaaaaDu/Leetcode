/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length === 0) return [];
    let left = 0, bottom = 0, right = 1, top = 0, res = [], i = 0, num = matrix.length * matrix[0].length;
    while (res.length !== num) {
        while (right) {
            if (matrix[i].length === 0) {
                right = 0;
                bottom = 1;
            }else {
                res.push(matrix[i].shift());
            }
        }          
        while (bottom) {
            if (!matrix[i + 1] || matrix[i + 1].length === 0) {
                bottom = 0;
                left = 1;
            } else {
                i++;
                res.push(matrix[i].pop());
            }
        }
        while (left) {
            if (matrix[i].length === 0) {
                left = 0;
                top = 1;
            } else {
                res.push(matrix[i].pop());
            }
        }  
        while (top) {
            if (!matrix[i - 1] || matrix[i - 1].length === 0) {
                top = 0;
                right = 1;
            } else {
                i--;
                res.push(matrix[i].shift());
            }
        }  
    }
    return res;
};