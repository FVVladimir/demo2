import { trigonSquaer, trigonArr } from "../src/task3.js";

export const test3 = () => {
    mocha.setup('bdd');
    let assert = chai.assert;

    describe('trigonSqaer', function() { 

        it('праметры функции не заданы', function() {
            let a = false;
            assert.equal(trigonSquaer(), a);

        });

        it('параметры заданы', function(){
             let a = [51.399584081488406, 62.353829072479584, 76.04683487003255, NaN];
             assert.deepEqual(a, trigonSquaer(trigonArr));
        });
        
    });
   
    mocha.run();
};