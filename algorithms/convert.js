/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows <= 1) return s;
    
    let n = numRows*2 - 2, len = s.length, res = '';
    
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < len; j += n) {
            if (j + i < len) res += s[j + i];
            if (i % (n / 2) != 0 && j + n - i < len) res += s[j + n - i];
        }
    }

    return res;
};