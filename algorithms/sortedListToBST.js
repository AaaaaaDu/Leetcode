/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    var nodes = [], root = null, len = 0;
    while(head){
        nodes.push(head.val);
        head = head.next;
    }
    root = sortedBST(0,nodes.length-1);
    return root;
    
    function sortedBST(start,end){
        if(start>end) return null;
        var mid = Math.ceil((start+end)/2);
        var tree = new TreeNode(nodes[mid]);
        tree.left = sortedBST(start,mid-1);
        tree.right = sortedBST(mid+1,end);
        return tree;
    }
    

};