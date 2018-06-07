/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var len = s.length, res = [];
    find([],s);
    return res;
    
    function find(arr,str){
        if(str.length===0){
            res.push(arr.concat());
            return;
        }
        for(var i=1;i<=str.length;i++){
            var preS = str.substr(0,i);
            if(isPalindrome(preS)){
                arr.push(preS);
                find(arr,str.substr(i));
                arr.pop();
            }
        }
    }
    
    function isPalindrome(s){
        var len = s.length,i=0;
        while(i<len){
            if(s[i] !== s[len-1]) return false;
            i++;
            len--;
        }
        return true;
    }
};