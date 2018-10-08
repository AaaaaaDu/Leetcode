/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return null;
    
    let len = 1, other = head, res = new ListNode(-1), p = res;
    
    while(other.next) {
        len++;
        other = other.next;
    }
    // 构造环
    other.next = head;
    k = len - (k % len);
    
    while(k) {
        other = other.next;
        k--;
    }
    // 切断环
    head = other.next;
    other.next = null;
    
    return head;
};