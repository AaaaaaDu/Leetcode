/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {
    var words = 'abcdefghijklmnopqrstuvwxyz'
    var use = 0,
        row = 1; //当前行使用量,行数
    for (var i = 0, len = S.length; i < len; i++) {
        //console.log(row,use,widths[words.indexOf(S[i])])
        if ((use + widths[words.indexOf(S[i])]) > 100) {
            row++;
            use = widths[words.indexOf(S[i])];
        } else if((use + widths[words.indexOf(S[i])]) === 100){
            row++;
            use =0;
        }else {
            use += widths[words.indexOf(S[i])];
        }

    }
    var res = [];
    res.push(row);
    res.push(use);
    return res;
};