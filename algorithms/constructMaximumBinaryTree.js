/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    var len = nums.length;
    var max = nums.concat().sort((a,b)=>b-a);
    //arr 保存使用过的值
    var arr = [max[0]];
    
    return construct(max[0],0,len-1);
    
    
    //leftline,rightline控制每次遍历的区间
    function construct(n,leftline,rightline){
        if(n === -Number.MAX_VALUE) return null;
        // left 为 该节点左侧最大值 , right 为 该节点右侧最大值
        var index = nums.indexOf(n),left=(-Number.MAX_VALUE),right=(-Number.MAX_VALUE);

        for(var i=leftline;i<=rightline;i++){
            if(i<index && arr.indexOf(nums[i])===-1){
                left = Math.max(left,nums[i]);
            }
            if(i>index && arr.indexOf(nums[i])===-1){
                right = Math.max(right,nums[i]);
            }
        }
        
        
        arr.push(left,right);
        var node = new TreeNode(n);
        node.left = construct(left,leftline,index);
        node.right = construct(right,index,rightline);
        return node;
        
    }
};













