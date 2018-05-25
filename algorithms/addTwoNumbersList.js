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
    if(!l1 && !l2) return [];
    var a="",b="",res=[],lena,lenb,c=0;
    while(l1){
        a += l1.val;
        l1 = l1.next;
    }
    while(l2){
        b += l2.val;
        l2 = l2.next;
    }
    lena = a.length-1;
    lenb = b.length-1;

    while(lena>=0 && lenb>=0){
        var x = a[lena]-0,y=b[lenb]-0;
        if(x+y+c>9){
            res.unshift(x+y+c-10);
            c = 1;
        }else{
            res.unshift(x+y+c);
            c = 0;
        }
        lena--;
        lenb--;
    }

    while(lena>=0){
        var x = a[lena]-0;
        if(x+c>9){
            res.unshift(x+c-10);
            c = 1;
        }else{
            res.unshift(x+c);
            c = 0;
        }
        lena--;
    }
    
    while(lenb>=0){
        var x = b[lenb]-0;
        if(x+c>9){
            res.unshift(x+c-10);
            c = 1;
        }else{
            res.unshift(x+c);
            c = 0;
        }
        lenb--;
    }
    if(c){
        res.unshift(1);
    }
    
    return res;
};

/*
    1.用字符串将链表的数字表示
    2.字符串相加
*/