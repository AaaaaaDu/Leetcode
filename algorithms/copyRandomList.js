/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    let map = new Map(), cur = head;
    
    while(cur) {
        let newNode = new RandomListNode(cur.label);
        map.set(cur, newNode);
        cur = cur.next;
    }
    
    cur = head;
    
    while(cur) {
        let node = map.get(cur);
        map.get(cur.next) && (node.next = map.get(cur.next));
        map.get(cur.random) && (node.random = map.get(cur.random));
        cur = cur.next;
    }
    return map.get(head);
};

/*
    使用哈希表保存原链表节点和新链表节点的映射关系
    
    注意: next 或 random 指针为null的情况
*/
