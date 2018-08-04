/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if(!root) return;
    let node = null,//上层节点
        first = root,//下层的第一个节点
        pre =  null;//当前节点的前一个节点
    while(first){
        let sign = 0;//记录first是否进入下层
        while(!sign && first){//重置first和node
            if(first.left){
                node = first;
                first = first.left;
                sign = 1;
            }else if(first.right){
                node = first;
                first = first.right;
                sign = 1;
            }else{
                if(first.next){
                    first = first.next;
                }else{
                    sign = 1;
                    first = null;
                }
            }
        }
        
        pre = first;
        while(node){//连接节点
            if(node.left && node.left !== pre){
                pre.next = node.left;
                pre = node.left;
            }
            if(node.right && node.right !== pre){
                pre.next = node.right;
                pre = node.right;
            }
            node = node.next;
        }
        
    }

};
