/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
// var rotateString = function(A, B) {
//     if(!A && !B) return true;
//     var len = A.length,A = A.split("");
//     while(len!==0){
//         var last = A.pop();
//         A.unshift(last);
//         if(A.join("")===B) return true;
//         len--;
//     }
//     return false;
// };
var rotateString = function(A, B) {
    if(!A && !B) return true;
    if(A.length !== B.length) return false;
    
    A = A + A;
    return A.indexOf(B) > -1;
};