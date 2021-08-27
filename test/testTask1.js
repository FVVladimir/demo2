 import { cheesBoard } from '../src/task1.js';
 
 mocha.setup('bdd');

describe("cheesBoard", function() {

    it("возвращяет строку с задаными параметрами", function() {
      chai.assert.equal(cheesBoard(3, 3, '*'), '****<br>****<br>****<br>****<br>');
    });
  
  });

  describe("cheesBoard", function() {
  it("возвращяет строку с задаными параметрами", function() {
      chai.assert.equal(cheesBoard(3,3,'#'), '####<br>####<br>####<br>####<br>');
  });

  });

mocha.run();