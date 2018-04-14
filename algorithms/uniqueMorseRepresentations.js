/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var translates = [],translate = "";
    for(var i=0;i<words.length;i++){
        for(var j=0;j<words[i].length;j++){
            switch(words[i][j]){
                case "a" : translate += ".-"; break;
                case "b" : translate += "-..."; break;
                case "c" : translate += "-.-."; break;
                case "d" : translate += "-.."; break;
                case "e" : translate += "."; break;
                case "f" : translate += "..-."; break;
                case "g" : translate += "--."; break;
                case "h" : translate += "...."; break;
                case "i" : translate += ".."; break;
                case "j" : translate += ".---"; break;
                case "k" : translate += "-.-"; break;
                case "l" : translate += ".-.."; break;
                case "m" : translate += "--"; break;
                case "n" : translate += "-."; break;
                case "o" : translate += "---"; break;
                case "p" : translate += ".--."; break;
                case "q" : translate += "--.-"; break;
                case "r" : translate += ".-."; break;
                case "s" : translate += "..."; break;
                case "t" : translate += "-"; break;
                case "u" : translate += "..-"; break;
                case "v" : translate += "...-"; break;
                case "w" : translate += ".--"; break;
                case "x" : translate += "-..-"; break;
                case "y" : translate += "-.--"; break;
                default: 
                    translate += "--..";
            }
        }
        if(translates.indexOf(translate) === -1){
            translates.push(translate)
        }
        translate = "";
    }
    return translates.length;
}; 

