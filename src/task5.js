export const context = {
    min: 345456,
    max: 345487
};


export const countTicket = (obj) => {
     const diapazon = [];
     
    for (let i =  obj.min; i <= obj.max; i +=1){

         diapazon.push(i);
    };    

    const firstPart = diapazon.map((item) => {    
           return item.toString().slice(0,3)
    })
    
    // const secondPart = diapazon.map((item) => {
    //     return item.toString().slice(3,6);
    // })

    // const firstPartSplit = firstPart.map((item) => {
    //     return item.split('');
    // });

    // for (let i = 0; i <= firstPartSplit.length; i += 1){
         
    //     let c = firstPartSplit[i]
         
    //     for (let k = 0; k <= c.length; k += 1){
    //          console.log(Number(c[k]));
    //     }
    // }

    // let arrNum = firstPartSplit.map((item) => {
    //     return Number(item);
    // });
    //  arrNum.reduce((acc, el) => acc + el, 0);

//    console.log(firstPart);
// //    console.log(secondPart);
//    console.log(firstPartSplit);
//    console.log(arrNum);
}