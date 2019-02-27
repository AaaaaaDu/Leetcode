/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const a = A.split(" "), b = B.split(" "), res = [], map = {}
          alen = a.length, blen = b.length;
    
    for (let i = 0; i < alen; i++) {
        map[a[i]] = map[a[i]] + 1 || 1
    }
    
    for (let i = 0; i < blen; i++) {
        map[b[i]] = map[b[i]] + 1 || 1
    }
    
    for (let i in map) {
        if (map[i] === 1) res.push(i);
    }
    
    return res;
};