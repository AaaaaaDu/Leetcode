/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
    const set = new Set();
    
    A.forEach(s => {
        const len = s.length, even = [], odd = [];
        
        for (let i = 0; i < len; i++) {
            if (i % 2) {
                odd.push(s[i]);
            } else {
                even.push(s[i]);
            }
        }
        
        odd.sort();
        even.sort();
        
        set.add(odd + '' + even);
    });
    
    return set.size;
};