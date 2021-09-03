 import { chessBoard } from '../src/task1.js'; 
 
 export const test1 = () => {
  mocha.setup('bdd');
  let assert = chai.assert;

describe('cheesBoard', function() {
   
    it('возвращяет строку с задаными параметрами', function() {
      let a = '* * * \n * * *\n* * * \n';
      assert.equal(chessBoard(3, 3, '*'), a);
    });
    
    it('возвращяет строку с задаными параметрами', function() {
    let a = '# # # \n # # #\n# # # \n';
      assert.equal(chessBoard(3, 3,'#'), a);
  });

    it('символ тип - строка', function () {
      assert.typeOf(chessBoard(1, 1, '*'), 'string');
  });

    it('длинна и ширина должны быть > 0', function () {
      let invalidData = {
          status: 'fail',
          reason: 'width and length must be bigger 0'
      };
      let result = chessBoard(0, 3, '*');

      assert.deepEqual(result, invalidData);
  });
  
  });
mocha.run();
 
};