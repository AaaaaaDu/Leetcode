/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var len1 = num1.length,len2=num2.length,c=0;
    num1 = num1.split("").reverse();
    num2 = num2.split("").reverse();
    if(len1>len2){
        num2.forEach(function(n,index){
            if((n - 0) + (num1[index] - 0)>= 10){
                c = 1;
                num1[index] = (n - 0) + (num1[index] - 0) - 10;
            }else{
                c = 0;
                num1[index] = (n - 0) + (num1[index] - 0) ;
            }
            while(c) {
                num1[index+1] = (num1[index+1]-0) +1 || 1
                if(num1[index+1]>=10){
                    num1[index+1] = num1[index+1] -10;
                    c = 1;
                    index++;
                }else{
                    c = 0;
                }
            };
        })
        return num1.reverse().join("");
    }else{
        num1.forEach(function(n,index){
            if((n - 0) + (num2[index] - 0) >= 10){
                c = 1;
                num2[index] = (n - 0) + (num2[index] - 0) - 10;
            }else{
                c = 0;
                num2[index] = (n - 0) + (num2[index] - 0);
            }
            while(c) {
                num2[index+1] = (num2[index+1]-0) +1 || 1;
                if(num2[index+1]>=10){
                    num2[index+1] = num2[index+1] -10;
                    c = 1;
                    index++;
                }else{
                    c = 0;
                }
            };
        })
        return num2.reverse().join("");
    }
};