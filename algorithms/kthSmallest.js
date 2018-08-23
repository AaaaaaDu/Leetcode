/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var count = 0;
    var val; 
    var stop = false;
    traverse(root);
    return val;

    function traverse(node) {
        if (!stop) {
            if (node.left !== null) traverse(node.left);
            count++;
            if (count == k) {
                val = node.val; 
                stop = true;
                return;
            }
            if (node.right !== null) traverse(node.right);
        }
    }   
};
/*
    1.inorder遍历的次序就是BST的数的大小次序
    2.设置一个stop的参量。一旦stop为true（也就是数到k的时候），就终止
*/