/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    return words.filter(word => {
        const map = {}, set = [];
        
        for (const [index, char] of [...pattern].entries()) {
            const cur = word[index];
            
            if (!map[char]) {
                map[char] = cur;
                if(set.includes(cur)) {
                    return false;
                }
                set.push(cur);
            } else if (map[char] !== cur) {
                return false;
            }
        }
        
        return true;
    })
};