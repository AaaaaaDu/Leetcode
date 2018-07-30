/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    let res = "";
    S.split("").forEach(function(s){
        let reg = new RegExp(s, "g");
        if(T.match(reg)){
            let len = T.match(reg).length;
            for(let i=0;i<len;i++){
                res += s;
            }
        }
        
    });
    T.split("").forEach(function(s){
        if(S.indexOf(s) === -1){
            res += s;
        }
    });
    return res;
};