/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let res = [];
    
    A.forEach(val => {
       if (val % 2) {
           res.push(val);
       } else {
           res.unshift(val);
       }
    });
    
    return res;
};