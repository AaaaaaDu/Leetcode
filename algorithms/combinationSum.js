/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates = candidates.filter(a=>a<=target).sort((a,b)=>a-b);
    var res = [],len=candidates.length,arr = [];
    find(arr,0,0);
    return res;

    function find(arr,index,sum){
        for(var i=index;i<len;i++){
            var newNum = sum + candidates[i];
            if(newNum > target){
                return; 
            }else if(newNum===target){
                arr.push(candidates[i]);
                res.push(arr.concat());
                arr.pop();
                return;
            }else{
                arr.push(candidates[i]);
                find(arr,i,newNum);
                arr.pop();
            }
        }
    }
};