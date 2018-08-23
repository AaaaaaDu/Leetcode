/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/*
    如果有重合节点，就说明最后一个节点一定相同，在哪里重合，后面的节点就一定重合。
    所以先求出两条链各自的长度，然后从较长链的链头开始往前走，一直走到跟较短链一
    样长的地方，然后两条链开始同步匹配，找到相同节点就返回，否则就是返回null
*/
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) return null;
    var lenA = 0;
    var nodeA = headA;
    while (nodeA !== null) {
        lenA++;
        nodeA = nodeA.next;
    }
    var lenB = 0;
    var nodeB = headB;
    while (nodeB !== null) {
        lenB++;
        nodeB = nodeB.next;
    }
    var iDiff = 0;
    nodeA = headA;
    nodeB = headB;
    if (lenA > lenB) {
        while (iDiff < lenA - lenB) {
            nodeA = nodeA.next;
            iDiff++;
        }
    }
    else if (lenA < lenB) {
        while (iDiff < lenB - lenA) {
            nodeB = nodeB.next;
            iDiff++;
        }
    }
    while (nodeA !== null && nodeB !== null) {
        if (nodeA == nodeB) return nodeA;
        nodeA = nodeA.next;
        nodeB = nodeB.next;
    }
    return null;    
};