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
var distributeCoins = function(root) {
    let sum = 0;
    postOrder(root);
    
    return sum;
    
    function postOrder(node) {
        if (!node) return 0;
        
        const l = postOrder(node.left);
        const r = postOrder(node.right);
        
        sum += Math.abs(l) + Math.abs(r);
        
        return node.val + l + r - 1;
    }
};