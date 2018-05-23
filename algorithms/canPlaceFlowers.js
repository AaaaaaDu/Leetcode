/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    var count = 0,len = flowerbed.length;
    if(!flowerbed[0] && !flowerbed[1]){
        flowerbed[0] = 1;
        count++;
    }
    if(!flowerbed[len-1] && !flowerbed[len-2]){
        flowerbed[len-1] = 1;
        count++;
    }
    for(var i=1;i<len-1;i++){
        if(!flowerbed[i] && !flowerbed[i-1] && !flowerbed[i+1]){
            flowerbed[i] = 1;
            count++;
        }
    }
    return count>=n;
};