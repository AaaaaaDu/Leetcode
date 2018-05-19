/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    var count = 0;
    s = s.split(" ");
    s.forEach(function(a){
        if(a!=="") count++;
    })
    return count;
};

/*
    连续空格的处理
    用例:
        "Of all the gin joints in all the towns in all the world,   "
        "            "
*/