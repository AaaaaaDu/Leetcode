/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    let num = 0
    
    return A.map(val => {
        num = ((num << 1) + val) % 5;
        return num % 5 === 0;
    })
};