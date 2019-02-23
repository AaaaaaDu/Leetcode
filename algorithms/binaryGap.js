/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    let s = N.toString(2), lastIndex = -1, len = s.length, max = 0;
    for (let i = 0; i < len; i++) {
        if (s[i] === "1") {
            if (lastIndex === -1) {
                lastIndex = i;
            } else {
                max = Math.max(max, i - lastIndex);
                lastIndex = i;
            }
        }
    }
    
    return max;
};