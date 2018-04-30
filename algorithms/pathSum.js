/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if(!root) return 0;
    return findPath(root,sum)+pathSum(root.left,sum)+pathSum(root.right,sum);
    
    function findPath(node,sum){//找出该节点符合路径的条数
        var res = 0;
        if(!node) return res;
        if(node.val === sum) res++;
        res += findPath(node.left,sum-node.val);
        res += findPath(node.right,sum-node.val);
        return res;
    }
};