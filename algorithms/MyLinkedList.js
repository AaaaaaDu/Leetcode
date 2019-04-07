/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.list = new Node(-1);
};

function Node(val, next) {
    this.val = val;
    this.next = next || null;
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let head = this.list.next;
    
    while (index && head) {
        head = head.next;
        index--;
    }
    
    return head ? head.val : -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const next = this.list.next;
    
    this.list.next = new Node(val, next);
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let head = this.list.next;
    
    while (head.next) {
        head = head.next;
    }
    
    head.next = new Node(val);
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let head = this.list, next;
    
    while (index && head) {
        head = head.next;
        index--;
    }
    
    if (head) {
        next = head.next;
        head.next = new Node(val, next);
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let head = this.list.next, next;
    
    while (index - 1 && head.next) {
        head = head.next;
        index--;
    }
    
    head.next && (head.next = head.next.next);
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */