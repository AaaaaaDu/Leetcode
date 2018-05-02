/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let V = ["a","e","i","o","u","A","E","I","O","U"], position = [];
    s = s.split("");
    findVowels(s);
    while(position.length>1){
        let first = position.shift(),last = position.pop();
        
        let t = s[first];
        s[first] = s[last];
        s[last] = t;
        
    }
    return s.join("");
    
    function findVowels(s){
        for(let i=0,len=s.length;i<len;i++){
            if(V.indexOf(s[i])!==-1)
                position.push(i);
        }
    }
};