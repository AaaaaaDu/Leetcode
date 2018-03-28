/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var rotate = function(matrix) {
//     var t;
//     for(var i=0,len =matrix.length;i<len-1;i++){
//         for(var j=0;j<len-i-1;j++){
//             t = matrix[i][j];
//             matrix[i][j] = matrix[len-1-j][len-1-i];
//             matrix[len-1-j][len-1-i] = t;
//         }
//     }
//     for(i=0;i<=len/2-1;i++){
//         for(j=0;j<len;j++){
//             t = matrix[i][j];
//             matrix[i][j] = matrix[len-1-i][j];
//             matrix[len-1-i][j] = t;
//         }
//     }
// };

var rotate = function(matrix) {
    var len =matrix.length
    for(var i = len-1;i>=0;i--){
        var n = 0;
        for(var j=0;j<len;j++){
            matrix[n].push(matrix[i][j]);
            n++;
        }
    }
    for(i=0;i<len;i++){
        matrix[i].splice(0,len);
    }
}
/*
    方法一:
        1.以对角线为轴翻转
        2.再以x轴(第二行为轴翻转)
*/