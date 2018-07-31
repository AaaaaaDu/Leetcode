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
var swapPairs = function (head) {
    if(!head || !head.next) return head;
    let preNode = new ListNode(-1), first = head, second = head.next, postNode = second.next, nodeHead = preNode;
    while(preNode && first && second){
        //交换节点
        preNode.next = second;
        second.next = first;
        first.next = postNode;
        
        //重置
        preNode = first;
        first = preNode.next;
        second = first && first.next;
        postNode = second && second.next;
    }
    
    return nodeHead.next;
};

/*
    需要将交换的两个节点隔离出来,
    为此需要知道两节点前面和后面的第一个节点, 以及两个节点四个量
    这样才不会在交换时, 对其余节点产生影响
*/