/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let len = S.length, curD = len, curI = 0, res = [];
    
    for (let i = 0; i < len; i++) {
        if (S[i] === 'I') {
            res.push(curI);
            curI++;
        } else {
            res.push(curD);
            curD--;
        }
    }
    
    res.push(curD);

    return res;
};