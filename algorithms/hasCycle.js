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
var hasCycle = function(head) {
    if(!head)return false;
    var fast = head;
    var slow = head;
    while(fast){
        fast = fast.next;
        slow = slow.next;
        if(fast === null){
            return false;
        }
        fast = fast.next;
        if(fast === slow) return true;
    }
    return false;
}
//通过一快一慢两个指针判断