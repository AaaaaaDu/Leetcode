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
var sortList = function(head) {
    if (!head || !head.next) return head;
    let fast = head, slow = head, next, partOne, partTwo;
    
    while(fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    // 以链表中部为界将链表分为两半
    next = slow.next;
    slow.next = null;
    // 将两部分别排序
    partOne = sortList(head);
    partTwo = sortList(next);
    
    return merge(partOne, partTwo);
    
    function merge(partOne, partTwo) {
        let head = new ListNode(-1), cur = head;
        
        while(partOne && partTwo) {
            if(partOne.val < partTwo.val) {
                cur.next = partOne;
                cur = partOne;
                partOne = partOne.next;
            } else {
                cur.next = partTwo;
                cur = partTwo;
                partTwo = partTwo.next;
            }
        }

        cur.next = partOne? partOne : partTwo;
        
        return head.next;
    }
};