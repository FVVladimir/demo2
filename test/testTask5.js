import { countTicket, context } from "../src/task5.js";

export const test5 = () => {

    mocha.setup('bdd');
    let assert = chai.assert;
    mocha.run();

    describe('countTicket', function(){

        it('массив билетов не введен', function(){
            let a = false;
            assert.equal(countTicket(), a);
        });

        it('массив билетов не введен как обьект', function(){
            let a = false;
            assert.equal(countTicket(234555, 234777), a);
        });

        it('массив билетов задан верно', function(){
            let a = {method: 1, firstMethod: 3, secondMethod: 0} ;
            assert.deepEqual(countTicket(context), a);
        });
    
    });
};