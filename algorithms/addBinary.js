/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var lenA = a.length;
    var lenB = b.length;
    if (lenA === 0) return b;
    if (lenB === 0) return a;
    var numA, numB;
    var revA = a.split("").reverse();
    var revB = b.split("").reverse();
    var result = [];
    var lenMin = lenA < lenB ? lenA : lenB;
    var iStep = 0;
    for (var i = 0; i < lenMin; i++) {
        numA = revA[i] == "1" ? 1 : 0;
        numB = revB[i] == "1" ? 1 : 0;
        iStep = add(numA, numB, iStep);
    }
    if (lenMin == lenA) {
        for (i = lenMin; i < lenB; i++) {
            numB = revB[i] == "1" ? 1 : 0;
            iStep = add(0, numB, iStep);
        }
    }
    else {
        for (i = lenMin; i < lenA; i++) {
            numA = revA[i] == "1" ? 1 : 0;
            iStep = add(numA, 0, iStep);
        }
    }
    if (iStep) result.push(1);
    return result.reverse().join("");

    function add(numA, numB, iStep) {
        var sum = numA + numB + iStep;
        if (sum < 2) {
            result.push(sum);
            return 0;
        }
        else {
            result.push(sum - 2);
            return 1;
        }
    }    
};

// 把字符串转成数组, 再颠倒一下更加方便
