/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    return build(inorder);
               
    function build(inorder){
        if(inorder.length===0) return null;
        var rootVal = postorder.pop();
        var root = new TreeNode(rootVal);
        root.right = build(inorder.slice(inorder.indexOf(rootVal)+1));
        root.left = build(inorder.slice(0,inorder.indexOf(rootVal)));
        return root;
    }
               
};
       
       /*
            由后序遍历的定义，我们知道最后一个值必定是二叉树的根节点root
            由中序遍历的定义，我们又可以发现根节点是左右子树的分界点
       */