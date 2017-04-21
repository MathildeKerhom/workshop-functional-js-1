const expect = require('chai').expect;
const reverseYolo = require('../src/exercise2').reverseYolo;

describe('GIVEN function reverseYolo', function() {

  it('WHEN my mystery input THEN my wonderful output', function() {

    // Your future job begins here ...
    let whereIsMyMind = ['033GKNORT', [0,0,1,1,2,2,4,7]];

    expect(reverseYolo(whereIsMyMind)).to.eql([ 'T', 'R', 'O', 'N', 'K', 'G', '3', '3', '0', 7, 4, 2, 2, 1, 1, 0, 0 ]);
  });

});