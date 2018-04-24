/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var count=0,
        num;
    nums.forEach(function (v) {
        if(count===0){
            num=v;
        }
        count+=(num===v)?1:-1;
    });

    return num;
};