/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    if (name[0] !== typed[0]) return false;
    let n = 1, t = 1, len = name.length;
    
    while (n < len) {
        if (name[n] === typed[t]) {
            n++;
            t++;
        } else {
            if (typed[t] === typed[t - 1]) {
                t++;
            } else {
                return false;
            }
        }
    }
    return true;
}; 