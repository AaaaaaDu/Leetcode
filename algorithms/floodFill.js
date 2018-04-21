/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    var oldColor = image[sr][sc];  
    if (oldColor != newColor) {  
       DFS(image, sr, sc, oldColor, newColor);  
    }  
    return image;
};

function DFS(image,sr,sc,old_color,new_color){
   var row_num = image.length, col_num = image[0].length;  
   if (sr < 0 || sr >= row_num || sc < 0 || sc >= col_num || image[sr][sc] != old_color) {  
       return;  
   }  
   image[sr][sc] = new_color;  
   DFS(image, sr - 1, sc, old_color, new_color);  
   DFS(image, sr + 1, sc, old_color, new_color);  
   DFS(image, sr, sc - 1, old_color, new_color);  
   DFS(image, sr, sc + 1, old_color, new_color); 
}