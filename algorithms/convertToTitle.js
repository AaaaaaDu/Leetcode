/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var s="ZABCDEFGHIJKLMNOPQRSTUVWXYZ",res = "";

    while(n){
        res = s[Math.floor(n%26)] + res;
        n = (n-1)/26 |0;
    }
    
    return res;
};

/*
    28  = 26^1 * 1 + 26^0 + 2;
    52  = 26^1 * 2 + 26^0 + 0;
    701 = 26^1 * 26 + 26^0 + 25;
*/