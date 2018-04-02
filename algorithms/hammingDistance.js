/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var p=0;
   if(x>y){
        x=x.toString(2);
        y=y.toString(2);
        y=y.padStart(x.length,"0");
        for(i=x.length-1;i>=0;i--){
            if(x.charAt(i)!=y.charAt(i)){
                p++;
            }
        }
    }else if(x<y){
        y=y.toString(2);
        x=x.toString(2);
        x=x.padStart(y.length,"0");
        for(i=y.length-1;i>=0;i--){
           if(x.charAt(i)!=y.charAt(i)){
                p++;
           }  
       }
   }else{
       return 0;
   }
   return p;
};
/*
    1.将两个数字转成二进制
    2.将较短的补齐
    3.比较
*/