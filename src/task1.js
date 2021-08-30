export const cheesBoard = (boardHight, boardWidth, symbol) => {

   let a ='';    

     for (let i = 0; i < boardWidth; i += 1){
         for (let j = 0; j < boardHight; j += 1){
             
            a += (i %  2 === 1) ? ` ${symbol}` : `${symbol} `;
         };
        
         a += '\n';
     };
    
       document.querySelector('.task1').innerHTML = a;    
       console.log(a);
       return a;
      
    };