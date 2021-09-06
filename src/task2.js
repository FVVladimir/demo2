export const envelop1 = {h:19, w:20};
export const envelop2 = {h:16, w:19};
export const envelop3 = {h:16, w:19};

export const checkEnvelop = (obj1, obj2) => {

  const invalidData =  {
    status: 'fail',
    reason: 'введите данные второго конверта'
  };

     if (obj1 == undefined || obj2 == undefined) {
      return  invalidData;
     };

      if(obj1.w > obj2.w && obj1.h > obj2.h){       
        
        // console.log('envelop1');
        return 1;
      
      }; 
      
      if (obj2.w > obj1.w && obj2.h > obj1.h){        
        
        // console.log('envelop2');
        return 2;

      }; 
      
      if (obj1.w === obj2.w && obj1.h === obj2.h){        
        
        // console.log('0');
        return 0;

      };
    
};