/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const map = new Map(), len = words.length;
    
    for (let i = 0; i < 26; i++) {
        map.set(order[i], i);
    }
    map.set(undefined, -1);
    
    for(let i = 0; i < len - 1; i++) {
        for(let j = 0; j < words[i].length; j++) {
            if (map.get(words[i][j]) > map.get(words[i + 1][j])) {
                return false;
            } else if (map.get(words[i][j]) < map.get(words[i + 1][j])) {
                break;
            } else {
                continue;
            }
        }
    }
    
    return true;
};