/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
    var min = 0;
    for(var i=0;i<needs.length;i++){//算出不使用礼包需要多少钱
        min += price[i] * needs[i];
    }
    for(var i=0;i<special.length;i++){//计算使用每种礼包的所需价格
        var remain = [];
        for(var j=0;j<needs.length;j++){//计算使用礼包后的剩余数量
            if(needs[j]>=special[i][j]){
                remain.push(needs[j]-special[i][j]);
            }
        }
        if(remain.length === needs.length){//保证不购买超出待购清单的物品
            var p = shoppingOffers(price, special, remain) + special[i][special[i].length-1];
            min = Math.min(p,min);
        }
    }
    
    return min;
};

