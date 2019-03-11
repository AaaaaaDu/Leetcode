/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    let res = new Set();
    
    for (let a = 1; a < bound; a *= x) {
        for (let b = 1; a + b <= bound; b *= y) {
          res.add(a + b);
          if (y === 1) break;
        }
        if (x === 1) break;
    }
    return [...res];
};