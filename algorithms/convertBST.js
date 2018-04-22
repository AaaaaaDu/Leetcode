/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    var sum = 0;
    inorderSum(root);
    inorder(root);
    return root;
    
    function inorderSum(node){
        if(!node) return;
        inorderSum(node.left,sum);
        sum += node.val;
        inorderSum(node.right,sum);
    }

    function inorder(node){
        if(!node) return;
        inorder(node.left,sum);
        var t = node.val;
        node.val = sum;
        sum -= t;
        inorder(node.right,sum);
    }
};




/*
    1.第一次遍历求出所有节点的和
    2.第二次中序遍历的时候 (必须是中序,因为这种遍历可以将搜索树,按从大到小的顺序输出)
        t = node.val;
        node.val = sum;
        sum -= t;
*/