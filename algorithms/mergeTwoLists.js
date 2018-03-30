/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;
    var nodes = [];
    while(l1!==null && l2!==null){
        if(l1.val > l2.val){
            nodes.push(l2);
            l2 = l2.next;
        }else if(l1.val < l2.val){
            nodes.push(l1);
            l1 = l1.next;
        }else if(l1.val == l2.val){
            nodes.push(l2);
            l2 = l2.next;
            nodes.push(l1);
            l1 = l1.next;
        }
    }
    while(l1){
        nodes.push(l1);
        l1 = l1.next;
    }
    while(l2){
        nodes.push(l2);
        l2 = l2.next;
    }
    for(var i=0,len=nodes.length;i<len;i++){
        nodes[i].next = nodes[i+1];
    }
    return nodes[0];
};
