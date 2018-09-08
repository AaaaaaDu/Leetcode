/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    if(n === 0) return 0;
    let count = 0, q = [n], set = new Set();
    
    while(n) {
        let qlen = q.length;
        count++;
        
        while(qlen) {
            let cur = q.shift(), len = Math.floor(Math.sqrt(cur));
            
            for(let i = len; i > 0; i--) {
                let squares = i * i;

                if (squares < cur && !set.has(cur - squares)) {
                    q.push(cur - squares);
                    set.add(cur - squares);
                }else if(squares === cur) {
                    qlen = 1;
                    n = 0;
                    break;
                }
            }
            qlen--;
        }
    }
    
    return count;
};