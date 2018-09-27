/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var multiply = function(num1, num2) {
    var m = num1.length, n = num2.length;
    var arr = Array(m + n).fill(0);

    for (var i = m - 1; i >= 0; i--) {
        for (var j = n - 1; j >= 0; j--) {
            var tempMultiply = (~~num1[i]) * (~~num2[j]);

            tempMultiply += arr[i + j + 1];

            arr[i + j] += ~~(tempMultiply / 10);
            arr[i + j + 1] = tempMultiply % 10;
        }
    }

    return arr.join('').replace(/^0+/g, '') || '0'
};
