/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const s = [], t = [];
    
    help(S, s);
    help(T, t);
    
    return s.join("") === t.join("");
    
    function help (str, arr) {
        str.split("").forEach(val => {
            if (val === "#") {
                arr.pop();
            } else {
                arr.push(val);
            }
        })
    }
};