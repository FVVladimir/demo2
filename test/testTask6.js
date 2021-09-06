import { rowNumber } from '../src/task6.js';

export const test6 = () => {
    
    mocha.setup('bdd');
    let assert = chai.assert;
    mocha.run();

    describe('rowNumber', function(){

        it('данные введены корректно', function(){
            let arr =[ 5, 6, 7, 8, 9 ];
            assert.deepEqual(arr, rowNumber(5, 25));
        });

        
        it('данные введены  не корректно', function(){
            let a = false;
            assert.deepEqual(a, rowNumber('5', '25'));
        });

        it('данные не введены', function(){
            let a = false;
            assert.deepEqual(a, rowNumber());
        });
    
    });
};