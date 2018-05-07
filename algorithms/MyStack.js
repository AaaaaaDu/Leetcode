var MyStack = function() {
    this.arr = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MyStack.prototype.push = function(x) {
    this.arr.push(x);
};

/**
 * @returns {void}
 */
MyStack.prototype.pop = function() {
    return this.arr.pop();
};

/**
 * @returns {number}
 */
MyStack.prototype.top = function() {
    return this.arr[this.arr.length-1];
};

/**
 * @returns {boolean}
 */
MyStack.prototype.empty = function() {
    return this.arr.length === 0;
};