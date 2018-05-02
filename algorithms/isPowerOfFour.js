/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if(num===0) return false;
    num = Math.log(num)/Math.log(4);
    return num===Math.floor(num)?true:false;
};

// 用log计算
