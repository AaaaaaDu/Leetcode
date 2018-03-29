/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs === "" || strs.length===0) return "";
    var prifex = strs[0];        // 默认将第一个认为是最长共同
    for(var i=1;i<strs.length;i++){
        // 将当前最长共同字符串和当前数组中的对比,把小的那个作为长度
        var len = prifex.length>strs[i].length ? strs[i].length:prifex.length;
        var j=0;
        for(j=0;j<len;j++){
            // 逐个字符比较,不等的时候退出
            if(prifex.charAt(j)!=strs[i].charAt(j))
                break;
        }
        // 退出的j即当前的最小,整个遍历结束后就是整个的最小了
        prifex = prifex.substring(0,j);
    }
    return prifex;
};