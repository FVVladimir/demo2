export const trigonArr = [{name:'ABC', a:10, b:20, c:15.5}, {name:'BCA', b:11, c:17.3, a:10}, {name:'XYZ', x:12, y:12, z:12}];

export const trigonSquaer = (arr) => {
  let sqares = [];
    for (let key in arr ){    
     
      let a = Object.values(arr[key]);
         const p = 0.5 * (a[1] + a[2] + a[3]);
         const sqare = Math.sqrt(p * (p -a[1]) * (p - a[2]) * (p - a[3]));
         sqares.push(sqare);               
    }
    sqares.sort();
    sqares.join();
    console.log(sqares);
    document.querySelector('.task3').innerHTML = sqares;
}