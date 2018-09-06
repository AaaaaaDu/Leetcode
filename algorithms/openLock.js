/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    if(deadends.includes('0000')) return -1;
    if(target === '0000') return 0;
    let q = ['0000'], count = 0, res = -1, set = new Set(deadends), sign = 0;
    
    while(q.length !== 0) {
        let len = q.length;
        count++;
        
        while(len) {
            let cur = q.shift();
            for(let i = 0; i < 4; i++){
                let child = rotate(cur, i, true);
                if(child === target) {
                    res = count;
                    q = [];
                    len = 1;
                    sign = 1;
                    break;
                } else if (!set.has(child)) {
                    q.push(child);
                    set.add(child);
                }
            }
            for(let i = 0; i < 4; i++){
                if(sign) break;
                let child = rotate(cur, i, false);
                if(child === target) {
                    res = count;
                    q = [];
                    len = 1;
                    break;
                } else if (!set.has(child)) {
                    q.push(child);
                    set.add(child);
                }
            }
            len--;
        }
    }
    
    return res;
    
    /**
     * 转动锁
     * @param {string} cur 当前的值
     * @param {number} index 转动的索引
     * @param {boolean} isUp 是否向上
     * @return {string} 转动之后的值
     */
    function rotate(cur, index, isUp) {
        cur = cur.split('');
        if(isUp) {
            cur[index] = (parseInt(cur[index]) + 1) % 10;
        } else {
            cur[index] = (parseInt(cur[index]) - 1) === -1? 9 :parseInt(cur[index]) - 1;
        }
        return cur.join('');
    }
};