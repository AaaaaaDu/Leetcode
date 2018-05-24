/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var res = 0;
    var accum = 5;
    while (accum <= n) {
        res += Math.floor(n / accum);
        accum *= 5;
    }
    return res;
};

/*
    带因子5的话，是1个0， 带因子25的话，是2个0， 带因子5^k的话，是k个0，
    一开始先查1到n中，是5的倍数的有几个，再查是25的倍数的有几个，...， 全部加起来就是结果
*/