/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    var res = [];
    var singles = new Set();
    var dups = new Set();
    for (var i = 0,len=s.length; i < len - 9; i++) {
        var sub = s.substr(i, 10);
        if (!dups.has(sub)) {
            if (singles.has(sub)) {
                singles.delete(sub);
                dups.add(sub);
            }
            else {
                singles.add(sub);
            }
        }
    }
    res = [...dups];
    return res;
};