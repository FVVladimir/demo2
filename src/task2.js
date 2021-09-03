export const envelop1 = {h:19, w:20};
export const envelop2 = {h:16, w:19};
export const envelop3 = {h:16, w:19};

export const checkEnvelop = (obj1, obj2) => {

      if(obj1.w > obj2.w && obj1.h > obj2.h){       
        
        document.querySelector('.task2').innerHTML = 'envelop1';
        console.log('envelop1');
        return 1;
      
    } else if (obj2.w > obj1.w && obj2.h > obj1.h){      
        
        document.querySelector('.task2').innerHTML = 'envelop2';
        console.log('envelop2');
        return 2;

      } else if (obj1.w === obj2.w && obj1.h === obj2){       
        
        document.querySelector('.task2').innerHTML = '0';
        console.log('0');
        return 0;

      };
    
};