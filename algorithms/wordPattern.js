/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    if(pattern==="" || str==="") return false;
    var a = {},copy = [], copyPattern = new Set(pattern);
    str = str.split(" ");
    
    copyPattern.forEach(function(value) {
        a[str[pattern.indexOf(value)]] = value;
    })
    for(var i=0,len=str.length;i<len;i++){
        copy.push(a[str[i]])
    }
    
    copy = copy.join("");

    return copy===pattern;
};

/*
    "abba"
    "dog cat cat dog"
    "abba"
    "dog dog dog dog"
    "abba"
    "dog cat cat fish"
    ""
    "beef"
*/