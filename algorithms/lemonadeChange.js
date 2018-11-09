/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let ten = 0, five = 0, len = bills.length;
    
    for(let i = 0; i < len; i++) {
        let cur = bills[i];
        if (cur === 5) {
            five++;
        } else if (cur === 10) {
            ten++;
        }
        cur -= 5;
        
        let needTen = Math.floor(cur / 10);
        if (needTen > ten) {
            cur -= ten * 10;
            ten = 0;
        } else {
            cur -= needTen * 10;
            ten -= needTen;
        }
        
        five -= Math.floor(cur / 5);
        if (five < 0) return false;
    }
    
    return true;
};

/*
    [5,5,10,20,5,5,5,5,5,5,5,5,5,10,5,5,20,5,20,5]
*/