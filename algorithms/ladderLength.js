/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;
    
    let len = wordList.length, wordLen = beginWord.length, map = new Map(), queue = [beginWord];
    
    map.set(beginWord, 1);
    
    while (queue.length) {
        let word = queue.shift(), level = map.get(word);
        
        for (let i = 0; i < len; i++) {
            let different = 0, other = wordList[i];
            
            for (let j = 0; j < wordLen; j++) {
                if (word[j] !== other[j]) different++;
            }
            if (different !== 1) continue;
            
            if (other === endWord) return level + 1;
            
            if (!map.has(other)) {
                queue.push(other);
                map.set(other, level + 1);
            }
        }
    }
    
    return 0;
};
/*
    广度优先搜索
*/