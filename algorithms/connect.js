/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (root === null) return;
    var node = root;
    var first = null;
    var prev = null;
    while (node !== null) {
        //if first is null, find first
        if (first === null) {
            if (node.left !== null) {
                first = node.left; 
            }
            else if (node.right !== null) {
                first = node.right; 
            }
        }
        if (node.left !== null) {
            if (prev !== null) prev.next = node.left;
            prev = node.left;
        }
        if (node.right !== null) {
            if (prev !== null) prev.next = node.right;
            prev = node.right;
        }
        
        if (node.next === null) {
            node = first;
            first = null;
            prev = null;
        }
        else {
            node = node.next;
        }
    }  
};
/*
    node是上层节点,frist保存下层的第一个,pre表示下层的当节点的前一个节点
    利用上层中已经产生的next这个信息来,连接下一层的节点
*/