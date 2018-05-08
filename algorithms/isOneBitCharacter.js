/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    var len = bits.length, index = 0;
    while(index <= len - 2){
        if(bits[index] === 1){
            index += 2;
        }else{
            index ++;
        }
             
    }
    if(len-index === 1){
        return true;
    }else{
        return false;
    }
};

/*
用例:
    [0, 1, 0]
    [1, 0, 0]
    [1, 1, 1, 0]
*/