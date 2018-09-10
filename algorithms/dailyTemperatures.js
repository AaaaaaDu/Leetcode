/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    let len = temperatures.length, stack = [], res = new Array(len).fill(0);
    
    for(let i = 0; i < len; i++) {
        while(stack.length !== 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let index = stack.pop();
            res[index] = i - index;
        }
        stack.push(i);
    }
    return res;
};