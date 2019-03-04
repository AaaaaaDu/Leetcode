/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    let res = "", len = licensePlate.length, key = '';
    
    for (let i = 0; i < len; i++) {
        const s = licensePlate[i].toLowerCase();
        
        s >= 'a' && s <= 'z' && (key += s);
    }
    
    words.forEach(word => {
        let tmp = key, str = [...word], len = tmp.length, sign = 1;
        
        for (let i = 0; i < len; i++) {
            if (str.includes(tmp[i])) {
                str.splice(str.indexOf(tmp[i]), 1);
            } else {
                sign = 0;
                break;
            }
        }
        
        if (sign && (res.length > word.length || res.length === 0)) {
            res = word;
        }
    });
    
    return res;
};