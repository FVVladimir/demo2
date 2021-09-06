import { getNumbersFibonacci, contextFib, contextFibO, contextFibB} from '../src/task7.js';

export const test7 = () => {
    
    mocha.setup('bdd');
    let assert = chai.assert;
    mocha.run();
   
    describe('getNumbersFibonacci', function(){
        it('не указна длинна ряда', function(){

            let invalidData = {
            status: 'fail',
            reason: 'the number must be no less than 0 or no more than 48'
            };
            let result =  getNumbersFibonacci(contextFibO);      
            assert.deepEqual(result, invalidData)
        });

        it('длинна ряда больше ограничения введенного в функции', function(){

            let invalidData = {
            status: 'fail',
            reason: 'the number must be no less than 0 or no more than 48'
            };
            let result = getNumbersFibonacci(contextFibB)         
            assert.deepEqual(result, invalidData)
        });

        
        it('заданы верные параметры', function(){            
             
            let result =  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];        
            
            assert.deepEqual(getNumbersFibonacci(contextFib), result);
        });

       
    });

};