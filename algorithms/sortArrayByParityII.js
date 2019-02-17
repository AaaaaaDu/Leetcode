/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    const len = A.length, res = [];
    let odd = 1, even = 0;
    
    A.forEach(val => {
        if (val % 2) {
            res[odd] = val;
            odd += 2;
        } else {
            res[even] = val;
            even += 2;
        }
    });
    
    return res;
};