/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    const res = [];
    
    let sum = A.reduce((total, num) => {
        return num % 2 ? total : total + num;
    }, 0);
    
    queries.forEach(arr => {
        let val = arr[0], index = arr[1];
        
        if (!(A[index] % 2)) sum -= A[index];
        
        A[index] += val;
        
        if (!(A[index] % 2)) sum += A[index];
        
        res.push(sum);
    });
    
    return res;
};