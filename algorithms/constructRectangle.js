/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let l = Math.ceil(Math.sqrt(area));
    for(;l<=area;l++){
        let w = area / l;
        if(w === (w | 0)){
            return [l,w]
        }
    }
};