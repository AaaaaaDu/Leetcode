/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    var p = {}, res;
    
    paragraph = paragraph.split(" ");
    paragraph.forEach(function(a){
        if(!/^[a-zA-Z]+$/.test(a)){
            a = a.slice(0,a.length-1);
        }
        a = a.toLowerCase();
        p[a] = p[a]+1 || 1;
    });
    
    for(item in p){
        if(banned.indexOf(item) === -1){
            if(!res) res = item;
            res = Math.max(p[res],p[item]) === p[item]? item : res;
        }
    }
    
    return res;
};
