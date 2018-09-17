/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let numStack = [], strStack = [], numReg = /\d/, strReg = /[a-z,A-Z]/, str = "", num = 0;
    for(let i = 0, len = s.length; i < len; i++) {
        if (numReg.test(s[i])) { 
            num = 10 * num + (s[i] - 0);
        } else if (strReg.test(s[i])) {
            str += s[i];
        } else if (s[i] === "[") {
            numStack.push(num);
            strStack.push(str);
            num = 0;
            str = "";
        } else if (s[i] === "]") {
            let num = numStack.pop();
            for(let j = 0; j < num; j++) {
                strStack[strStack.length - 1] += str;
            }
            str = strStack.pop();
        } 
    }
    return str;
};