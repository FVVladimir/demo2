export const checkPalindrom = (num) => {

    if(num == undefined){
        
        return undefined;
    
    }
    //  else if( typeof(num) !== 'number') {
        
    //     return false;    
    // } 
    
    else  {

        let numStr = num.toString().split('');

        for (let i = 0; i < numStr.length / 2; i +=1){
           
            if (numStr[i] == numStr[numStr.length - 1 - i]) {
                
                return num;
    
            } else {
               
                return 0;            
            }
            
        };
            //   console.log(num,numStr);
    };   
      

};


// function checkPalindrome(num) {
//     var numString = num.toString();
//     return numString.split("").reverse().join("") == numString;
// }