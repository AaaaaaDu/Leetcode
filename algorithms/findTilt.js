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
var findTilt = function(root) {
    if(!root) return 0;
    var sum = 0;
    sumNode(root);
    return sum;
    
    function sumNode(node){
        if(!node) return 0;
        var left = sumNode(node.left);
        var right = sumNode(node.right);
        sum += Math.abs(left-right);
        return left+right+node.val;
    }
};