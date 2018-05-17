/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    var s = "",count=0, res = [];
    for(var i=S.length-1;i>=0;i--){
        if(S[i] !== "-"){
            s = S[i].toUpperCase() + s;
            count++;
        }
        if(count===K || (i===0 && s)){
            res.unshift(s);
            s = "";
            count=0;
        }
    }
    return res.join("-");
};

/*
    用例: "--a-a-a-a--"
          2
*/  