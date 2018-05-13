/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
    var hour, minutes, numBits, result = [],
        hourFormat = "";
    for (hour = 0; hour <= 11; hour++) {
        for (minutes = 0; minutes <= 59; minutes++) {
            numBits = hour.toString(2).split(1).length - 1;
            numBits += minutes.toString(2).split(1).length - 1;
            if (numBits === num) {
                hourFormat = hour + ":" + (minutes<10 ? '0' + minutes : minutes);
                result.push(hourFormat);
            }
        }
    }
    return result;
};