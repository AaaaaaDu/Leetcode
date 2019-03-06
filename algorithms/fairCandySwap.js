/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    const a = A.reduce(add),
          b = B.reduce(add),
          change = -(a - b) / 2,
          len = A.length;
    
    for (let i = 0; i < len; i++) {
        if (B.includes(A[i] + change)) return [A[i], A[i] + change];
    }

    function add (sum, val)  {
        return sum + val;
    }

};