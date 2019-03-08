/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let i = 0, j = S.length - 1, s = S.split("");

    while (i < j) {
        if (isletter(s[i]) && isletter(s[j])) {
            [s[i], s[j]] = [s[j], s[i]];
            i++;
            j--;
        } else if (!isletter(s[i])) {
            i++;
        } else if (!isletter(s[j])) {
            j--;
        } else {
            i++;
            j--;
        }
    }
    
    return s.join("");
    
    
    function isletter(s) {
        return s >='a' && s <= 'z' || s >='A' && s <= 'Z';
    }
};