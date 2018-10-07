/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let len = lists.length;
    if(len === 0) return null;
    if(len === 1) return lists[0];
     
    let end = len - 1, begin = 0;
    while(end > 0) {
        begin = 0;
        while(begin < end)
        {
            lists[begin] = mergeTwoLists(lists[begin], lists[end]);
            begin ++;
            end --;
        }
    }
    
    return lists[0]
};

function mergeTwoLists(l1, l2) {
    let res = new ListNode(-1),
        cur = res;
    while(l1!==null && l2!==null) {
        if(l1.val<l2.val){
            cur.next = l1;
            l1 = l1.next;
        }else{
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    cur.next = (l1===null) ? l2 : l1;
    return res.next;

};