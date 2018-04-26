/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return false;
    if(!find(root,p.val) || !find(root,q.val)) return false;
    //p,q有一个等于该节点
    if(root.val===p.val || root.val===q.val) return root;
    //当p,q分别在节点的左右子树
    if(p.val<root.val&&q.val>root.val || p.val>root.val&&q.val<root.val) return root;
    //同在左子树时
    if(p.val < root.val) return lowestCommonAncestor(node.left,p,q);
    //同在右子树时
    if(p.val > root.val) return lowestCommonAncestor(node.right,p,q);
};

function find(node,val){
    if(!node ) return false;
    if(node.val === val){
        return true;
    }else if(node.val > val){
        return find(node.left,val);
    }else{
        return find(node.right,val);
    }
}
/*
     1.p,q都在左子树上；
     2.p,q都在右子树上；
     3.p,q一个在左子树上，一个在右子树上；
     4.p,q有一个在该节点上。
*/
//当p,q分别在节点的左右子树或有一个在该节点上时,该节点为最近公共节点