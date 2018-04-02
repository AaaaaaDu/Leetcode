var hammingWeight = function(n) {
    var str = (n).toString(2),
        arr = str.split("");
        num = 0;
    
    arr.forEach(function(val){
        if( val * 1 == 1 ){
            num++;
        }
    });
    
    return num;
}
/*
    1.将整数通过toString(2)转成2进制,保存在数组里
    2.计数
*/