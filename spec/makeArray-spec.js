import { makeArray } from './../src/scripts.js';

describe('makeArray', function() {
  function test1() {
    var testArr = makeArray();
    var controlArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (var i=0; i<controlArr.length; i++) {
      var counter =0;
      for (var j=0; j<testArr.length; j++) {
        if(testArr[j] === controlArr[i]) {
          counter++;
          console.log(counter);
        }
        if(counter>1) {
          return false;
        }
      }
    }
    return true;
  }

  it('should correctly test to see if any numbers are repeated', function() {
    expect(test1()).toEqual(true);
  });
});
