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
var diameterOfBinaryTree = function(root) {
    var max = 0;
    postorder(root);
    return max;
    
    function postorder(node){
        if(!node) return 0;
        var left = postorder(node.left);
        var right = postorder(node.right);
        max = Math.max(left+right,max);
        return Math.max(left,right)+1;
    }
};

/*
    用例: [1,2,3,4,5,null,null,5,null,null,5], [], [0]
    1. 找出 每个节点 左右子树的深度之和
    2. 选出最大的
*/