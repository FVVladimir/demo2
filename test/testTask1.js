 import { cheesBoard } from '../src/task1.js'; 
 
 export const test1 = () => {
  mocha.setup('bdd');
  let assert = chai.assert;

describe("cheesBoard", function() {
   
    it("возвращяет строку с задаными параметрами", function() {
      let a = '* * * \n * * *\n* * * \n';
      assert.equal(cheesBoard(3, 3, '*'), a);
    });
    it("возвращяет строку с задаными параметрами", function() {
    let a = '# # # \n # # #\n# # # \n';

      assert.equal(cheesBoard(3, 3,'#'), a);
  });
  
  });

  // describe("cheesBoard", function() {
  

  // });

mocha.run();
 
};