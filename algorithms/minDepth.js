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
var minDepth = function(root) {
    if(!root) return 0;
    if(!root.right && !root.left) return 1;
    if(root.left && root.right){
        var left = minDepth(root.left);
        var right = minDepth(root.right);
        return 1 + Math.min(left,right);
    }else if(root.right){
        var right = minDepth(root.right);
        return 1 + right;
    }else{
        var left = minDepth(root.left);
        return 1 + left;
    }
    
};

/*
    用例:[1,2]
*/