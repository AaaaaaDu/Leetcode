/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    var s = nums.concat(), res = new Array(nums.length);
    
    s = s.sort(function(a,b){
        return b-a;
    });
    
    s.forEach(function(item,index){
        switch(index){
            case 0 :  
                res[nums.indexOf(item)]  = "Gold Medal";
                break;
            case 1 :
                res[nums.indexOf(item)]  = "Silver Medal";
                break;
            case 2 :
                res[nums.indexOf(item)]  = "Bronze Medal";
                break;
            default:
                res[nums.indexOf(item)]  = index + 1 +"";
        }
    })
    return res;
};