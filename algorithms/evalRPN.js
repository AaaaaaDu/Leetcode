/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [], reg = ["+", "-", "*", "/"];
    tokens.forEach(val => {
       if(reg.includes(val)){
           let result, second = stack.pop() - 0, first = stack.pop() - 0;
           
           switch(val) {
               case "+": result = first + second; break;
               case "-": result = first - second; break;
               case "*": result = first * second; break;
               case "/": result = first / second; break;
           }

           stack.push(parseInt(result));
       } else {
           stack.push(parseInt(val));
       }
    });
    return  stack[0]
};