/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let arr = new Array(60).fill(0), count = 0;
    
    time.forEach(val => {
        arr[val % 60] = arr[val % 60] + 1 || 1;
    });
    
    count += arr[0] * (arr[0] - 1) / 2;
    count += arr[30] * (arr[30] - 1) / 2;
    
    for (let i = 1; i < 30; i++) {
        count += arr[i] * arr[60 - i];
    }
    
    return count;
};