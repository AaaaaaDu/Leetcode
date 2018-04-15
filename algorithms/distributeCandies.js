/**
 * @param {number[]} candies
 * @return {number}
 */
// var distributeCandies = function(candies) {
//     var type={},count=0;
//     for(var i=0,len=candies.length;i<len;i++){
//         if(!type[candies[i]]){
//             count++;
//             type[candies[i]] = 1;
//         }
//     }
//     return Math.min(len/2,count);
// };
//使用Set()对象去重
var distributeCandies = function(candies) {
    return Math.min(new Set(candies).size,candies.length/2);
};