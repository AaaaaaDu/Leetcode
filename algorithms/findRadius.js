/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    var len1 = houses.length,len2 = heaters.length;
    houses.sort(function(a,b){
        return a-b;
    });
    heaters.sort(function(a,b){
        return a-b;
    });
    var max = Number.MIN_VALUE;
    
    for(var i=0;i<len1;i++){
        var min=Number.MAX_VALUE;
        for(var j=0;j<len2;j++){
            min=Math.min(min,Math.abs(heaters[j]-houses[i]));
            
        }
        max = Math.max(min,max);
    }
    return max;
};

/*
    [2,3,5]
    [2]
    
    [7,2,4,14,15]
    [3,14]
    
    
    
    [1,2,3,5,15]
    [2,30]
*/