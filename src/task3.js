export const trigonArr = [{a:10, b:20, c:15.5}, {a:11, b:17.3, c:10}, {a:12, b:12, c:12}];

export const trigonSquaer = (arr) => {
  let sqares = [];
    for (let key in arr ){    
     
      let a = Object.values(arr[key]);
         const p = 0.5 * (a[0] + a[1] + a[2]);
         const sqare = Math.sqrt(p * (p -a[0]) * (p - a[1]) * (p - a[2]));
         sqares.push(sqare);               
    }
    sqares.sort();
    sqares.join();
    console.log(sqares);
    document.querySelector('.task2').innerHTML = sqares;
}