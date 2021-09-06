export const rowNumber = (nLanght, m) => {

    if(nLanght == undefined && m == undefined){
        return false;
    }

    if(typeof(nLanght) != 'number' || typeof(m) != 'number') {
        return false
    } else {
         

        let arr = [];
    let start = Math.ceil(Math.sqrt(m));

        for (let i = start; i < start + nLanght; i++) {
            
            arr.push(i);
        }
    // console.log(start, arr);    
   return arr;
    }    
}


