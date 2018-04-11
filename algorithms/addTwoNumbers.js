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
var addTwoNumbers = function(l1, l2) {
    var c = 0,Nodes = [],i=0;//c表示进位,head新链表
    
    while(l1 && l2){
        Nodes[i] = new ListNode(0);
        if((l1.val+l2.val+c)>9){
            Nodes[i].val = l1.val + l2.val - 10 + c;
            c = 1;
        }else{
            Nodes[i].val = l1.val+l2.val+c;
            c = 0;
        }
        l1 = l1.next;
        l2 = l2.next;
        i++;
    }
    while(l1){
        Nodes[i] = new ListNode(0);
        if(c){
            
            if(l1.val === 9){
                Nodes[i].val = l1.val+c-10;
                c = 1;
            }else{
                Nodes[i].val = l1.val+c;
                c = 0;
            }
        }else{
            Nodes[i].val = l1.val
        }
        i++;
        l1 = l1.next;
    }
    while(l2){
        Nodes[i] = new ListNode(0);
        if(c){
            
            if(l2.val === 9){
                Nodes[i].val = l2.val+c-10;
                c = 1;
            }else{
                Nodes[i].val = l2.val+c;
                c = 0;
            }
        }else{
            Nodes[i].val = l2.val;
        }
        i++;
        l2 = l2.next;
    }
    for(var i=0,len=Nodes.length-1;i<len;i++){
        Nodes[i].next = Nodes[i+1];
    }
    if(c === 1){
        Nodes[i].next = new ListNode(1);
    }else{
        Nodes[i].next = null;
    }

    return Nodes[0];
};