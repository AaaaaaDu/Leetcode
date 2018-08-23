/**
 * @param {number} num
 * @return {number}
 */
// var findComplement = function (num) {
//     var num_2 = num.toString(2),complement = [];
//     for (var i = 0,len = num_2.length; i < len; i++) {
//         if (num_2[i] === "1") {
//             complement.push(0);
//         } else {
//             complement.push(1);
//         }
//     }
//     num = parseInt(complement.join(""), 2);
//     return num;
// }

var findComplement = function(num) {
    return parseInt(num.toString(2).split('').map(function(a){
        return a^1;
    }).join(''),2)
};
