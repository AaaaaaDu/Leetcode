/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var res=[];
    arrange([],nums);
    return res;
    
    function arrange(arr1,arr2){
        var len = arr2.length;
        if(len === 0){
            res.push(arr1);
            return;
        }
        for(var i=0;i<len;i++){
            var other1 = arr1.slice();
            var other2 = arr2.slice();
            var a = other2.splice(i,1);
            other1.push(a[0]);
            console.log(other1,other2)
            arrange(other1,other2);
        }
    }
};

/*
    每次确认一个位置的数,保存到arr1中
    每次需要排序的数,放在arr2中
    每次递归的arr1      每次递归的arr2
    [ 1 ]              [ 2, 3 ]
    [ 1, 2 ]           [ 3 ]
    [ 1, 2, 3 ]        []
    [ 1, 3 ]           [ 2 ]
    [ 1, 3, 2 ]        []
    
    [ 2 ]              [ 1, 3 ]
    [ 2, 1 ]           [ 3 ]
    [ 2, 1, 3 ]        []
    [ 2, 3 ]           [ 1 ]
    [ 2, 3, 1 ]        []
    
    [ 3 ]              [ 1, 2 ]
    [ 3, 1 ]           [ 2 ]
    [ 3, 1, 2 ]        []   
    [ 3, 2 ]           [ 1 ]
    [ 3, 2, 1 ]        []
*/