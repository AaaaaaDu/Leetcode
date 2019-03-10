/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    if (!A.length) return [];
    const map = {}, res = [], len = A.length;
    
    [...(A[0])].forEach(val => {
        map[val] = map[val] + 1 || 1;
    })
    
    for (let key in map) {
        for (let i = 1; i < len; i++) {
            let reg = new RegExp(key, 'g'),
                mRes = A[i].match(reg);
            
            if (mRes) {
                map[key] = Math.min(map[key], mRes.length);
            } else {
                delete map[key];
            }
        }
    }
    
    for (let key in map) {
        for (let i = 0; i < map[key]; i++) {
            res.push(key);
        }
    }
    
    return res;
};