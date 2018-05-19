/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    if(S === "") return "";
    var set = new Set(["a","e","i","o","u","A","E","I","O","U"]), res = [];
    S = S.split(" ");
    S.forEach(function(s,index){
        if(set.has(s[0])){
            s += "ma";
            for(var i=0;i<index+1;i++){
                s += "a";
            }
        }else{
            var first = s[0];
            s = s.split("");
            s.shift();
            s = s.join("");
            s += first+"ma";
            for(var i=0;i<index+1;i++){
                s += "a";
            }
        }
        res.push(s);
    })
    return res.join(" ");
};