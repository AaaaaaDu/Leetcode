/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while(head && head.val === val){
        head = head.next;
    }
    var pre = head, cur = head;
    while(cur){
        if(cur.val === val){
            cur = cur.next;
            pre.next = cur;
        }else{
            pre = cur;
            cur = cur.next
        }
    }
    return head;
};

/*
    用例: [6,1] [6]
          6     6
*/