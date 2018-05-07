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
var minDiffInBST = function(root) {
    var prev = Number.MAX_VALUE,totalMin = Number.MAX_VALUE;
    
    function traverse(node){
        if (!node) {
            return;
        }
        traverse(node.left);
        totalMin = Math.min(totalMin, Math.abs(node.val - prev));
        prev = node.val;
        traverse(node.right);
    }
    traverse(root);
    return totalMin;
};

/*
    二叉搜索树中, 结点最小距离只会出现在相邻的两个节点中
    因此只需 用prev 保存 上一个节点的值
*/