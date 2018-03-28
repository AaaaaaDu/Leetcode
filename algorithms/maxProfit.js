/**
 * @param {number[]} prices
 * @return {number}
 */

//只要今天的价格大于昨天就进行交易 

var maxProfit = function(prices) {
    var i,len,profit = 0;
    for(i=1,len=prices.length;i<len;i++){
        if(prices[i] > prices[i-1]){
            profit += prices[i]-prices[i-1];
        }
    }
    return profit;
}