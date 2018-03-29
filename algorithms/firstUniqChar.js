/**
 * @param {string} s
 * @return {number}
 */
// var firstUniqChar = function(s) {
//     var a={},index = -1;
//     for(var i =0,len = s.length;i<len;i++){
//         a[s[i]] = a[s[i]]+1 || 1;
//     }

//     for(item in a){
//         if(a[item] === 1){
//             var x = s.indexOf(item);
//             if(index === -1 || x<index){
//                 index = x;
//             }
//             continue;
//         }
//     }
//     return index;
// };

var firstUniqChar = function (s) {
    var arr = [];
    var i = 0;
    for (; i < s.length; ++i) {
        if (arr.indexOf(s[i]) < 0) {
            if (s.indexOf(s[i], i + 1) < 0) {
                return i
            } else {
                arr.push(s[i])
            }
        }
    }
    return -1
};

/*
    方法一:
        1.遍历数组,将元素以"值":"出现次数"的形式保存在对象里
        2.找出出现次数为一的元素,使用indexOf求出其索引
        3.找出最小的索引
    方法二:
        1.将出现过得元素保存在数组中
        2.若在之后再次出现,push进数组
        3.若没有,返回索引
*/