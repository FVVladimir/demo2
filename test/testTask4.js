import { checkPalindrom } from '../src/task4.js';

export const test4 = () => {
    mocha.setup('bdd');
    let assert = chai.assert;
    mocha.run();

    describe('checkPalindrom', function(){
        it('число не введено', function(){
            let a = undefined;
            assert.equal(checkPalindrom(), a)
        });

        it('формат введенных данных не число', function(){
            let a = false;
            assert.equal(checkPalindrom('123'), a)
        });

        it('введенное число не палиндром', function(){
            let a = 0;
            assert.equal(checkPalindrom(123456), a)
        });

        it('введенное число палиндром', function(){
            let a = 99999;
            assert.equal(checkPalindrom(99999), a)
        });
    });
};