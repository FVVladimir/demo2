export const checkPalindrom = (num) => {
     
       let numStr = num.toString().split('');

    for (let i = 0; i < numStr.length / 2; i +=1){
       
        if (numStr[i] == numStr[numStr.length - 1 - i]) {

            console.log('это палиндром');

        } else {

            console.log('это не палиндром');
            
        }
        
    };
          console.log(num,numStr);

};


// function checkPalindrome(num) {
//     var numString = num.toString();
//     return numString.split("").reverse().join("") == numString;
// }