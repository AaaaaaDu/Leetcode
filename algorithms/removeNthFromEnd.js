/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head.next === null) return null;
    const nodes = [head];
    let next = head.next;
    while (next !== null) {
        nodes.push(next);
        next = next.next;
    }
    const index = nodes.length - n - 1;
    if (index === -1) {
        const newHead = head.next;
        head.next = null;
        return newHead;
    }
    nodes[index].next = nodes[index + 2] || null;
    return head;
};

/*
    将链表村放到数组中进行操作
*/