export const trigonArr = [{name:'abs', a:10, b:20, c:15.5}, {name:'bca', b:11, c:17.3, a:10}, {name:'xyz', x:12, y:12, z:12}];

export const trigonSquaer = (arr) => {
  let sqares = [];
    if (arr == undefined) {
      return false
    } else {
       
      for (let i = 0; i <= arr.length; i += 1) {    
        const sides = []      
            for (let key in arr[i]) {
              sides.push(arr[i][key])
            }
              const p = 0.5 * (sides[1] + sides[2] + sides[3]);
              const sqare = Math.sqrt(p * (p - sides[1]) * (p - sides[2]) * (p - sides[3]));
              sqares.push(sqare);                                   
            
           } 
           sqares.sort();
            
    }
  
    // console.log(sqares); 
    return sqares;
};