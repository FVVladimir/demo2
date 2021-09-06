export const context = {
    min: 345456,
    max: 345487
};

export const countTicket = (tickets) => {
     
    if(tickets == undefined){
        return false;
    }
    
    if(typeof(tickets) != 'object'){
        return false;
    } 
       else if(tickets.min < tickets.max){
        
        let result = {
            method : 0,
            firstMethod : 0,
            secondMethod : 0
        };        
        
        let happy1 = 0;
        let happy2 = 0;

        let min = tickets.min;
        let max = tickets.max;

        while(min < max){
            
            let x = min.toString().split('');

            let sumFirst = +x[0] + +x[1] + +x[2];
            let sumLast = +x[3] + +x[4] + +x[5];
            
            if(sumFirst == sumLast){ result.firstMethod += 1; }

            let sumOdd = 0;
            let sumEven = 0;
            
            for(let i = 0; i < x.length; i += 1){
                
                x[i] % 2 ? sumEven += +x[i] : sumOdd += +x[i];
            }
            if(sumOdd == sumEven){ result.secondMethod += 1; }

            min += 1;
        }
        result.method = happy1 >= happy2 ? 1 : 2;
        
        return result;
    }
    
    return false;
}

// export const countTicket = (obj) => {
//      const diapazon = [];          
     
//     for (let i =  obj.min; i <= obj.max; i +=1){

//          diapazon.push(i);
//     };  

//     let firstMethod = 0;
//     let secondMethod = 0;
    
//     for (let i = 0; i <= diapazon.length; i +=1){
        
//          let a = diapazon[i].toString().split('');
//          let sumFirst = +a[0] + +a[1] + +a[2];
//          let sumSecond = +a[3] + +a[4] + +a[5];

//          if(sumFirst == sumSecond) {
             
//             firstMethod += 1;
//          }         
//     }; 
    
//     console.log(firstMethod);
    
//     let odd = 0;
//     let even = 0;    

//     for (let i = 0; i <= diapazon.length; i += 1) {               
    
//         let a = diapazon[i].toString().split('');
//             a[i] % 2 == 0 ? even += +a[i] : odd += +a[i];

//         if(odd == even){ 
            
//             secondMethod += 1;
//          }
        
//      }
//      console.log(secondMethod);     
// };