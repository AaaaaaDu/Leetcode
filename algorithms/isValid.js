/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    const openChars = new Set('({[');
    const closeChars = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    for (let ch of s) {
        if (openChars.has(ch)) {
            stack.push(ch)
        } else if (closeChars[stack.pop()] !== ch) {
            return false
        }
    }
    return stack.length === 0
};
//利用栈的特性