/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var str = [
        "qwertyuiop",
        "asdfghjkl",
        "zxcvbnm"
    ];
    var res = [];
    for(var i=0,len=str.length;i<len;i++){
        for(var j=0;j<words.length;j++){
            if(str[i].indexOf(words[j][0].toLocaleLowerCase()) !== -1){
                var flag =1,string = "";
                words[j].split("").forEach(function(word){
                    if(str[i].indexOf(word.toLocaleLowerCase()) !== -1 && flag){
                        string += word;
                    }else{
                        flag = 0;
                    }
                })
                if(flag){
                    res.push(string);
                }
            } 
        }
    }
    return res;
};


/*
var findWords = function(words) {
    var key = {
        'q':1,'w':1,'e':1,'r':1,'t':1,'y':1,'u':1,'i':1,'o':1,'p':1,
        'a':2,'s':2,'d':2,'f':2,'g':2,'h':2,'j':2,'k':2,'l':2,
        'z':3,'x':3,'c':3,'v':3,'b':3,'n':3,'m':3
    }
    return words.filter((w)=>{
        let res = []
        w.split('').reduce((prev,curr)=>{
            key[prev.toLowerCase()] == key[curr.toLowerCase()]?res.push(1):res.push(0)
            return curr
        })
        if(res.indexOf(0) == -1){
            return w   
        }
    })
};
*/