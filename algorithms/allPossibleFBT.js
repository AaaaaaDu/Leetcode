/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {
    if (N % 2 === 0) return [];
    
    const map = {0: [], 1: [new TreeNode(0)]};

    return help(N);
    
    function help (N) {
        if (map[N]) return map[N];

        const res = [];

        for (let i = 1; i < N; i += 2) {
            const left = help(i);
            const right = help(N - i - 1);

            for (let l of left) {
                for (let r of right) {
                    const root = new TreeNode(0);
                    root.left = l;
                    root.right = r;
                    
                    res.push(root)
                }
            }
        }
        
        map[N] = res;
        
        return res;
    }
};