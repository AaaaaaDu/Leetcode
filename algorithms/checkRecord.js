/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    var l = 0, a = 0;
    for(var i=0,len=s.length;i<len;i++){
        if(s[i] === "A" ){
            a++;
            l = 0;
            if(a > 1) return false;
            
        }else if(s[i] === "L"){
            l++;
            if(l>2) return false;
        }else{
            l = 0;
        }
    }
    
    return true;
};