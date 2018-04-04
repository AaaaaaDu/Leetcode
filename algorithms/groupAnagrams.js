/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var group = {},key,str,res=[];
    for(var i=0,len=strs.length;i<len;i++){
        str = strs[i];
        key = restring(str);
        if(group.hasOwnProperty(key)){
            group[key].push(str);
        }else{
            group[key] = [str];
        }
    }
    for(item in group){
        if(group.hasOwnProperty(item)){
            res.push(group[item].sort());
        }  
    }
    return res;
};
function restring(str){
    var arr = str.split("");
    arr.sort();
    return arr.join("");
}
/*
    1.对每一个字符串，求出排序后的字符串，以它为key，寻找结果里有没有这个key，有就添加在内容里，没有就新建这个key
    2.扫描结果，打印
*/