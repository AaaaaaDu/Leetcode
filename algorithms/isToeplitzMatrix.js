/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    var len1 = matrix.length,
        len2 = matrix[0].length;
    if(len1<2) return true;
    if(len2<2) return true;
    for (var j = 0; j < len2 - 1; j++) {
        var r = 0,
            c = j;
            //console.log(matrix[r + 1][c + 1])
        while ((r + 1) !== len1 && (c + 1) !== len2) {
            if (matrix[r][c] !== matrix[r + 1][c + 1]) return false;
            r++;
            c++;
        }
    }
    //console.log(111)
    for (var i = 1; i < len1 - 1; i++) {
        var r = i,
            c = 0;
           // console.log(matrix[r + 1][c + 1])
        while ((r + 1) !== len1 && (c + 1) !== len2) {
            if (matrix[r][c] !== matrix[r + 1][c + 1]) return false;
            r++;
            c++;
        }
    }
    return true;
};