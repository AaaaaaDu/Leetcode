/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    // if (s.length === 0) return;
    let len = s.length, num = s.split(/\+|\-|\*|\//g), stack = [+num[0]], curNum = 1;
    
    for (let i = 1; i < len; i++) {
        if (s[i] === '-') {
            stack.push(-num[curNum]);
            curNum++;
        } else if (s[i] === '+') {
            stack.push(+num[curNum]);
            curNum++;
        } else if (s[i] === '*') {
            let top = stack.pop();
            top *= num[curNum];
            stack.push(top);
            curNum++;
        } else if (s[i] === '/') {
            let top = stack.pop();
            let tmp = Math.floor(Math.abs(top) / num[curNum]);
            tmp = top < 0 ? -tmp : tmp;
            stack.push(tmp);
            curNum++;
        }
    }

    return stack.reduce((total, num) => total + num);
};