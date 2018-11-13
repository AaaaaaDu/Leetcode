/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let len = people.length, res = [];
    // 按h降序, k升序排列
    people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
    
    for(let i = 0; i < len; i++) {
        res.splice(people[i][1], 0, people[i])
    }
    return res;
};

/*
    将数组按照h降序, k升序排列
    此时的k, 即为插入时该项元素在数组中的位置
*/