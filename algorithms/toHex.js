/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    var Hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    if(num === 0)
        return "0";
    if(num === -2147483648)//由于补码的范围是不对称的 |TMin| = |TMax|+1  所以TMin没有与之对应的正数
        return "80000000";
    var res = "";
    var NUM = Math.abs(num);//取绝对值
    while(NUM != 0){
        var temp = NUM%16;
        res = Hex[temp] + res;
        NUM = NUM/16 | 0;
    }
    if(num < 0){
        res = help(res);
    }
    return res;

    function help(s){//用于原码取反+1
        var sL = s.length-1,add=1;
        var Res = "";
        while(sL>=0 || add>0)
        {
            var cur=add;
            cur+=sL>=0?(15-reInt(s[sL--])):0;//补码 = 原码取反+1
            add=cur/16 | 0;//用来判断是否有进位
            cur%=16;
            Res=Hex[cur]+Res;
        }
        if(s.length<8){
            for(var i=1; i<=8-s.length; i++)
                Res = 'f' + Res;
        }
        return Res;
    }
    function reInt(c){//用于返回十六进制中单个字符代表的数字
        for(var i=0; i<=15; i++)
            if(c == Hex[i])
                return i;
        return -1;
    }

};