/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    if (data.length === 0) return false;
    
    const len = data.length;
    
    for (let i = 0; i < len; i++) {
        if (data[i] > 255) return false;
        
        let afterBit;
        
        if ((data[i] & 0b10000000) === 0) {
            afterBit = 0;
        } else if ((data[i] & 0b11100000) === 192) {
            afterBit = 1;
        } else if ((data[i] & 0b11110000) === 224) {
            afterBit = 2;
        } else if ((data[i] & 0b11111000) === 240) {
            afterBit = 3;
        } else {
            return false;
        }
        
        for (let j = 1; j <= afterBit; j++) {
            if (i + j >= len) return false;
            if ((data[i + j] & 0b11000000) != 128) return false;
        }
        i = i + afterBit;
    }
    
    return true;
    
};