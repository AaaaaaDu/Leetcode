/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.head = new ListNode('a', 'a');
    this.len = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let head = this.head;
    while(head.next) {
        if(head.next.key === key) {
            let val = head.next.value, count = head.next.count + 1;
            head.next = head.next.next;
            insert(this.head, key, val, count);
            return val;
        }
        head = head.next;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let len = 0, tail = this.head, pre;
    
    while (tail && tail.next) {
        pre = tail;
        tail.next.count = 0;
        if (tail.next.key === key) {
            tail.next = tail.next.next;
            len--;
        }
        len++;
        tail = tail.next;
    }

    if (len < this.len) {
        insert(this.head, key, value, 0);
    } else {
        pre.next = null;
        insert(this.head, key, value, 0);
    }
};

function insert(head, key, value, count) {
    while (head.next) {
        if (head.next.count <= count) {
            let node = new ListNode(key, value);
            node.count = count;
            node.next = head.next;
            head.next = node;
            return;
        }
        head = head.next;
    }
    let node = new ListNode(key, value);
    node.count = count;
    head.next = node;
}

function ListNode (key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.count = 0;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */