/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var store = nums1.reduce(function(map,n){
        map[n] = map[n] +1 || 1;
        
        return map;
    },{});
    console.log(store)
    return nums2.filter(function(n){
        if(store[n]){
            store[n]--;
            return true;
        }else{
            return false;
        }
    })
    
};