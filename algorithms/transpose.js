/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    if (!A[0]) return [];
    
    let r = A.length, c = A[0].length, res = [];

    for (let i = 0; i < c; i++) {
        res[i] = [];
        
        for (let j = 0; j < r; j++) {
            res[i].push(A[j][i]);
        }
    }
    
    return res;
};