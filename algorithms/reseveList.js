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
// var reverseList = function(head) {//迭代
//     if (head === null || head.next === null) return head;
//     var pre = head;
//     var cur = head.next;
//     pre.next = null;
//     while(cur){
//         var after = cur.next;
//         cur.next = pre;
//         pre = cur;
//         cur = after;
//     }
//     return pre;
// };
var reverseList = function(head) {//递归
    if (head === null || head.next === null) return head;
    var newL = reverseList(head.next);
    console.log(head)
    head.next.next = head;
    head.next = null;
    
    return newL;
}