/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    let arr = str.split(" "),
        result = [];
    arr.forEach((value)=> {
        if(value != "")
            result.push(value);
    })
    return result.reverse().join(" ");
};

/*
    "    "
    " 1"
    " 1 "
    "   a   b  c d   e  "
    var reverseWords = function(str) {
        return str.split(" ").reverse().filter(word => word !== "").join(" ");
    };
    上面这种效率差
*/