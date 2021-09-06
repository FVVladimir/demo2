export const chessBoard = (boardHight, boardWidth, symbol) => {

   let a ='';   
   
   if (boardWidth <= 0 || boardHight <= 0) {
            let invalidData = {
                status: 'fail',
                reason: 'width and length must be bigger 0'
            };
            return invalidData;
         } else if (boardWidth == undefined || boardHight == undefined || symbol == undefined) {
                  let invalidData = {
                      status: 'fail',
                      reason: 'enter width, length and symbol'
                  };
                  return invalidData;
              }  else if (typeof (symbol) != 'string') {
                     let invalidData = {
                         status: 'fail',
                         reason: 'symbol must be a string'
                     }
                     return invalidData;
                 } else {
                  
                  for (let i = 0; i < boardWidth; i += 1){
                     for (let j = 0; j < boardHight; j += 1){
                         
                        a += (i %  2 === 1) ? ` ${symbol}` : `${symbol} `;
                     };
                    
                     a += '\n';
                 };

                 }; 
    //    console.log(a);
       return a;
      
    };