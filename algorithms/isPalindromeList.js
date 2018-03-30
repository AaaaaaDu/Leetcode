/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next) return true;
    var fast = head, slow = head,nodes=[head];
    
    //找出链表中段
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    //颠倒后段再对比
    
    var last = slow.next, pre = head;
    while (last.next) {
        var tmp = last.next;
        last.next = tmp.next;
        tmp.next = slow.next;
        slow.next = tmp;
    }
    while (slow.next) {
        slow = slow.next;
        if (pre.val != slow.val) return false;
        pre = pre.next;
    }
    return true;

};