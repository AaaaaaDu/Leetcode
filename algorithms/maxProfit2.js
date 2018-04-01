/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //在能获利的地方尝试卖出，并比较卖出利润是否最大。在成本更低的地方则买入。
    let min = Number.MAX_VALUE;
	let max = 0;
    for( let i = 0; i < prices.length; i++ ) {
    	if( min <= prices[i] ) {
    		max = Math.max( max, prices[i]-min );
    	} else {
    		min = prices[i];
    	}
    }
    return max;
};