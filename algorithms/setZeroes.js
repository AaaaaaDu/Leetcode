/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var len1 = matrix.length;
    if (len1 == 0) return ;
    var len2 = matrix[0].length;
    if (len2 == 0) return ;
    var row = -1, col = -1;
    for (var i = 0; i < len1; i++)
        for (var j = 0; j < len2; j++)
        {
            if (matrix[i][j] == 0)
            {
                row = i; col = j;
            }
        }
    if (row == -1) return;
    for (var i = 0; i < len1; i++)
        for (var j = 0; j < len2; j++)
        {
            if (matrix[i][j] == 0 && i != row && j != col)
            {
                matrix[i][col] = 0;
                matrix[row][j] = 0;
            }
        }
    for (var i = 0; i < len1; i++)
        for (var j = 0; j < len2; j++)
        {
            if (i != row && j != col)
            {
                if (matrix[i][col] == 0 )
                    matrix[i][j] = 0;
                else if (matrix[row][j] == 0)
                    matrix[i][j] = 0;
            }
        }
    var index = -1; 
    while(++index < len1) matrix[index][col] = 0;
    index = -1;
    while(++index < len2) matrix[row][index] = 0;
    return ;
};

/*
方法1：
赋值另存一个m*n的矩阵，在原矩阵为零的值相应置新的矩阵行和列为零。额外空间为O(m*n).
方法2：
两个数组，bool[m] 和 bool[n] 分别存某行有零，后者某列有零。之后根据数组值将原矩阵相应位置置零。额外空间O(m + n)。
方法3：（常数额外空间）
1. 找到一个零的位置，把这行这列当做方法2中的两个数组存值。
2. 根据1的位置的所在行和列的值是否有零将矩阵相应位置置零。
3. 再把1中零所在位置的行和列置零。
*/