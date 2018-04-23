/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    var num=0;
    for(let i=1;i<=N;i++){
        if(judge(i)){
            num++;
        }
    }
    return num;
};
const map={
    '3':-1,
    '4':-1,
    '7':-1,
    '1':0,
    '8':0,
    '2':1,
    '5':1,
    '6':1,
    '9':1
};
function judge(num) {
    const str=num.toString();
    const len=str.length;
    let n=0;
    for(let i=0;i<len;i++){
        let num=map[str[i]];
        if(num<0){
            return false;
        }
        if(num>0){
            n++;
        }
    }
    
    return n>0;
}