/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    const stack = [];
    
    [...S].forEach(val => {
        if (val === ')' && stack[0] === '(') {
            stack.shift();
        } else {
            stack.unshift(val);
        }
    });
    
    return stack.length;
};