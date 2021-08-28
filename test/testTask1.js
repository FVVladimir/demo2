 import { cheesBoard } from '../src/task1.js';
 
 export const test1 = () => {
  mocha.setup('bdd');
  let assert = chai.assert;

describe("cheesBoard", function() {

    it("возвращяет строку с задаными параметрами", function() {
      assert.equal(cheesBoard(-2, 3, '*'));
    });
  
  });

  describe("cheesBoard", function() {
  it("возвращяет строку с задаными параметрами", function() {
      assert.equal(cheesBoard(3,3,'#'));
  });

  });

mocha.run();
 
};