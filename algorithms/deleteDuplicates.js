/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let pre = head,node = head;
    while(node){
        if(pre.val === node.val){
            pre.next = node.next;
            node = node.next;
        }else{
            pre = node;
            node = node.next;
        }
    }
    return head;
};