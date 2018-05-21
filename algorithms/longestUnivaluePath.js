/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
    if(!root) return 0;
    var max = 0;
    postorder(root,root.val);
    return max-1;
    
    function postorder(node,val){
        if(!node) return 0;
        
        var left = postorder(node.left,node.val);
        var right = postorder(node.right,node.val);
        
        if(node.val !== val){
            max = Math.max(max,left+right+1);
            return 0;
        }else{
            max = Math.max(max,left+right+1);
            return Math.max(left,right)+1;
        }
    }
};