/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let result = 0, h = grid.length, w = grid[0].length;
    if (h < 3 || w < 3) return result;
    
    // 3x3 矩阵下标偏移值的组合
    let vector = [
        [[2, 0], [1, 1], [0, 2]],
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]]
    ];
    let v_l = vector.length;
    // 开始计算
    for (let i = 0; i < h - 2; i++) {
        for (let j = 0; j < w - 2; j++) {
            let verify_arr = new Array(9).fill('x'); // 数组，用于验证 1～9 是否都在矩阵中
            let base = grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2]; // 将一条对角线的计算结果作为检验值
            let k = 0;
            for (; k < v_l; k++) {
                let num1 = grid[i + vector[k][0][0]][j + vector[k][0][1]],
                    num2 = grid[i + vector[k][1][0]][j + vector[k][1][1]],
                    num3 = grid[i + vector[k][2][0]][j + vector[k][2][1]];
                verify_arr[num1 - 1] = verify_arr[num2 - 1] = verify_arr[num3 - 1] = ''; // 将数组中对应下标的元素改写为 ''。如果 1～9 都在矩阵中，最后数组元素全为 ''
                if (num1 + num2 + num3 !== base) {
                    break;
                }
            }
            if (k === v_l && verify_arr.toString() === ',,,,,,,,') {
                result++;
            }
        }
    }
    return result;
};