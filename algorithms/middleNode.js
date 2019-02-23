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
var middleNode = function(head) {
    let fast = head, slow = head;
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    return slow;
};