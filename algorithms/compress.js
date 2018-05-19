/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    var cur = chars[0], count = 1;
    for(var i=0,len=chars.length;i<len;i++){
        chars.shift();
        if(i===len-1){
            chars.push(cur);
            if(count>1){
                count = count + "";
                count = count.split("");
                count.forEach(function(a){
                    chars.push(a);
                })
            }
        }else{
            if(chars[0] === cur){
                count++;
            }else{
                chars.push(cur);
                if(count>1){
                    count = count + "";
                    count = count.split("");
                    count.forEach(function(a){
                        chars.push(a);
                    })
                }
                cur = chars[0];
                count = 1;
            }

        }
        
        
        
    }
    return chars.length;
};

/*
    ["a","a","a","b","b","a","a"]
    ["a","a","a","b","b","a","a","b"]
*/