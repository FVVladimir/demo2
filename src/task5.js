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
    const secondPart = diapazon.map((item) => {
        return item.toString().slice(3,6);
    })

    const firstPartSum = firstPart.map((item) => {
        return item.split('');
    })
   console.log(firstPart);
   console.log(secondPart);
   console.log(firstPartSum);
}