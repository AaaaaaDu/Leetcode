/*
    1.判断行是否要求
    2.判断列是否要求
    3.判断九宫格是否符合要求
        行号:第i个九宫格的第j个格点的行号可表示为i/3*3+j/3
        列号:第i个九宫格的第j个格点的列号可表示为i%3*3+j%3
*/
var checkedArray = new Array(9)
var isValidSudoku = function(board) {

    for (var i = 0 ; i < board.length ; i++)
    {
       checkedArray.fill(0)
        for(var j = 0 ; j < board.length ; j ++)
        {
            if (checkValue(board[i][j]) === false )
            {

                return false
            }
        }

    }



    for ( i = 0 ; i < board.length ; i++)
    {
         checkedArray.fill(0)
        for( j = 0 ; j < board.length ; j++)
        {
            if (checkValue(board[j][i]) === false )
            {

                return false
            }
        }
    }

     checkedArray.fill(0)

    for ( i = 0 ; i < board.length ; i+=3)
    {

        for( j = 0 ; j < board.length ; j+=3)
        {
             checkedArray.fill(0)

            for (var k = 0 ; k < 9; k++)
            { 
      
                if (checkValue(board[i+   Math.floor(k/3)][j + k%3]) === false )
                {

                  return false
                }

            }
        }
    }

   return true;

};

var checkValue = function(value)
{
 

    if(value == '.') 
    {   
        return  true;
    }

    var index = value - '1';
    if (index < 0 || index > 9 ||  checkedArray[index] > 0)
    {

        return false;
    }
    else
    {

        checkedArray[index] = 1;
    }

    return true;
}