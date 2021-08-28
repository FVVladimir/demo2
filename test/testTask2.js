import { checkEnvelop, envelop1, envelop2 } from "../src/task2.js";

export const test2 = () => {mocha.setup('bdd');
 let assert = chai.assert;

 describe('checkEnvelop', function(){
     it ('сравниват параметры конвертов ', function(){
         assert.equal(checkEnvelop(envelop1,envelop2),)
     });
 });

 mocha.run();
}