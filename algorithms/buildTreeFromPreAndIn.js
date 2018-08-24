/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function(preorder, inorder) {
    if (preorder === null) return null;
    var len = preorder.length;
    return construct(0, len - 1);

    function construct(startI, endI) {
        if (startI > endI) {
            return null;
        }else if (startI == endI) {
            preorder.shift();
            return new TreeNode(inorder[startI]);
        }else {
            var indexRootI = inorder.indexOf(preorder[0]);
            preorder.shift();
            var root = new TreeNode(inorder[indexRootI]);
            root.left = construct(startI, indexRootI - 1);
            root.right = construct(indexRootI + 1, endI);
            return root;
        }
    } 
};
/*
    从preorder第一位的数开始，查到inorder相对应的值的index，这个值是根，
    并且这个index把inorder分成两半，分别是左半树和右半树。而左半树的区间
    [0, index-1]里的根，可以再从preorder里找，就是preorder里最靠前的那
    个值，右半区也同样的情况
*/