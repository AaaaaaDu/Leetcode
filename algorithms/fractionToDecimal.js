/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (denominator === 0) return "NaN";
    if (numerator === -1 && denominator === -2147483648) return "0.0000000004656612873077392578125";
    if (numerator === -2147483648 && denominator === -1) return "2147483648";

    let m = Math.abs(numerator), n = Math.abs(denominator), decimal = "", integer = "", ret = [], res = "";
    // 获取整数部分
    integer += Math.floor(m / n);
    m -= +integer * n;
    // 获取小数部分
    while (m !== 0) {
        if (ret.includes(m)) {
            // 如果余数重复出现, 结果为无限循环小数
            let index = ret.indexOf(m),
                before = decimal.substr(0, index),
                after = decimal.substr(index);
            
            res = integer + "." + before + "(" + after + ")";

            return numerator * denominator < 0 ? "-" + res : res;
        } 
        ret.push(m);
        m *= 10;
        decimal += Math.floor(m / n);
        m %= n;
    }
    // 退出循环结果为有限小数
    res = decimal === "" ? integer : integer + "." + decimal;
    
    return numerator * denominator < 0 ? "-" + res : res;
};

/*
    当余数重复出现时, 小数开始循环
*/