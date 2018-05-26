/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
    var set = new Set(),count = 0;
    while(head){
        if(G.indexOf(head.val)!==-1){
            while(head && G.indexOf(head.val)!==-1){
                head = head.next;
            }
            count++;
        }else{
            head = head.next;
        }
    }
    return count;
};