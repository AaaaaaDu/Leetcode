/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    var res = "";
    words.sort();
    var set = new Set();
    words.forEach(function(s){
        if(s.length===1 || set.has(s.substr(0,s.length-1))){
            res = s.length>res.length?s:res;
            set.add(s);
        }
    });
    return res;
};

/*
    Set的应用
*/