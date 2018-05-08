/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var front = 0, behind = numbers.length-1;
    while(numbers[front]+numbers[behind] !== target){
        if(numbers[front]+numbers[behind] > target){
            behind--;
        }else{
            front++;
        }
    }
    return [front+1,behind+1];
};