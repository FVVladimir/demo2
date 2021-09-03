import { checkEnvelop, envelop1, envelop2, envelop3 } from "../src/task2.js";

export const test2 = () => {mocha.setup('bdd');
 let assert = chai.assert;

 describe('checkEnvelop', function(){     

     it ('конверт один больше конверта два ', function(){
    let a = 1;        
    assert.equal(checkEnvelop(envelop1, envelop2), a)
     });

    //  it('должны быть заданы два параметра', function () {
    //     let invalidData = {
    //         status: 'fail',
    //         reason: 'have to be two envelop'
    //     };
    //     let result = checkEnvelop(envelop1, );
  
    //     assert.deepEqual(result, invalidData);
    // });

     it ('конверт два больше конверта один ', function(){
    let a = 2;        
    assert.equal(checkEnvelop(envelop2, envelop1), a)
    });

    it ('конверты равны ', function(){
        let a = 0;        
        assert.equal(checkEnvelop(envelop3, envelop2), a)
        });

 });

 mocha.run();
};