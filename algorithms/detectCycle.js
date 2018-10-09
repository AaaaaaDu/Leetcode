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
var detectCycle = function(head) {
    if(!head) return null;
    
    let fast = head, slow = head;
    while(fast) {
        fast = fast.next;
        slow = slow.next;
        
        if(!fast) return null;
        
        fast = fast.next;
        
        if(fast === slow) {
            slow = head;
            
            while(slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }  
    }
    
    return null;
};