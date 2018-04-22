/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(!nums2 || !nums1) return [];
    var a={},res=[];
    for(var i=0;i<nums2.length;i++){
        for(var j=0;j<nums1.length;j++){
            if(nums1[j]===nums2[i] && !a[nums1[j]]) a[nums1[j]]=1;
        }
    }
    for(key in a){
        if(a.hasOwnProperty(key)){
            res.push(key-0);
        }
    }
    return res;
};

// var intersection = function(nums1, nums2) {
//     var set=new Set(nums1),
//         set2=new Set();
//     nums2.forEach(function (v) {
//         if(set.has(v)){
//             set2.add(v);
//         }
//     });
//     return Array.from(set2);
// };