/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.split(" ");
    reg = /\w/;
    for(var i=s.length-1;i>=0;i--){
        if(reg.test(s[i])){
            return s[i].length;
        }
    }
    return 0;
};

/*
        用例:""," "
*/