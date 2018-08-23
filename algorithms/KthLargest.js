/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    if(nums.length){
        let root = new TreeNode(nums.shift());
        nums.forEach(function (val) {
            insertNode(root, val);
        });
        this.root = root;
    }else{
        this.root = null;
    }
    this.k = k;

    
};

/** 
 * 添加一个值, 并返回第k个元素
 * @param {添加的值 number} val
 * @return {第k大的值 number}
 */
KthLargest.prototype.add = function (val) {
    if(this.root === null){
        this.root = new TreeNode(val);
    }else{
        insertNode(this.root, val);
    }

    return findK(this.root, this.k); 

    /**
     * 找到第k个值
     * @param {搜索二叉树的根节点 TreeNode} node 
     * @param {number} k 
     */
    function findK(node, k) {
        let val, cnt;
        cnt = node.right ? node.right.cnt + 1 : 1;

        if(k >= cnt && k <= cnt + node.same) {
            return node.val;
        }else if(cnt > k) {
            val = findK(node.right, k);
        }else if(cnt < k) {
            val = findK(node.left, k - cnt - node.same);
        }
        return val;
    }
};

/**
 * 搜索二叉树的构造函数
 * @param {该节点的值} val 
 */
function TreeNode(val) {
    this.val = val; // 该节点的值
    this.left = null; // 左孩子节点
    this.right = null; // 右孩子节点
    this.cnt = 1;  // 该节点下的节点总数
    this.same = 0; // 同值节点的个数
}

/**
 * 插入节点的方法
 * @param {搜索二叉树的根节点 TreeNode} t 
 * @param {插入的值 number} val 
 */
function insertNode(t, val) {
    t.cnt++;
    if (t.val > val) {
        if (t.left === null) {
            t.left = new TreeNode(val);
        } else {
            insertNode(t.left, val);
        }
    } else if (t.val < val) {
        if (t.right === null) {
            t.right = new TreeNode(val);
        } else {
            insertNode(t.right, val);
        }
    } else {
        t.same++;
    }
}