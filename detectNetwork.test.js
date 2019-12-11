/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

/*describe('Introduction to Mocha Tests - READ ME FIRST', function() {*/
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  //visited mochajs.org and looked everything.
  // You will not be able to proceed with a failing test.

  /*it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
*/

// describe('Diner\'s Club', function() {
//   // Be careful, tests can have bugs too...
//
//   it('has a prefix of 38 and a length of 14', function() {
//   //  throw new Error('Delete me!');
//
//     if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
//       throw new Error('Test failed');
//     }
//   });
//
//   it('has a prefix of 39 and a length of 14', function() {
//     if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
//       throw new Error('Test failed');
//     }
//
//   });
// });
//Dinneer club using should
describe('Diner\'s Club', function() {

    var should=chai.should();

    it('has a prefix of 38 and length of 14', function() {
      detectNetwork('38456789123456').should.equal('Diner\'s Club');
    });
    it('has a prefix of 39 and length of 14', function() {
      detectNetwork('39456789123456').should.equal('Diner\'s Club');
    });
});
//below is using assert for American Express  card
// describe('American Express', function() {
//   // It can get annoying to keep typing the if/throw, so here is a
//   // helper function to throw an error if the input statement isn't true.
//   var assert = function(isTrue) {
//     if(isTrue) {
//       throw new Error('Test failed');
//     }
//
//   };
//
//   it('has a prefix of 34 and a length of 15', function() {
//     assert(detectNetwork('343456789012345') !== 'American Express');
//   });
//
//   it('has a prefix of 37 and a length of 15', function() {
//     assert(detectNetwork('373456789012345') !== 'American Express');
//   });
// });
describe('American Express', function() {

  var should = chai.should();
  it('has a prefix of 34 and length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });
  it('has a prefix of 37 and length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});


describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
//  var assert = chai.assert;
  var should = chai.should();
  it('has a prefix of 4 and length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

//   it('has a prefix of 4 and a length of 13', function() {
//     assert(detectNetwork('4123456789012') === 'Visa');
//   });
//
//   it('has a prefix of 4 and a length of 16', function() {
//     assert(detectNetwork('4123456789012345') === 'Visa');
//   });
//
//   it('has a prefix of 4 and a length of 19', function() {
//     assert(detectNetwork('4123456789012345678') === 'Visa');
//   });
// });

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var should = chai.should();

  // it('has a prefix of 51 and length of 16', function() {
  //   expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  // });
  //
  // it('has a prefix of 52 and length of 16', function() {
  //   expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  // });
  //
  // it('has a prefix of 53 and length of 16', function() {
  //   expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  // });
  it('has a prefix of 51 and length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 52 and length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 53 and length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
//  var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass
  var should=chai.should();

  it('has a prefix of 6011 and a length of 16',function(){
    detectNetwork('6011123456789123').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19',function(){
    detectNetwork('6011123456789123456').should.equal('Discover');
  });
  it("has a prefix of 65 and a length of 16",function(){
    detectNetwork('6534567891234567').should.equal('Discover');
  });
  it("has a prefix of 65 and a length of 19",function(){
    detectNetwork('6534567891234567123').should.equal('Discover');
  });
  it("has a prefix of 644 and a length of 16",function(){
    detectNetwork('6444567891234567').should.equal('Discover');
  });
  it("has a prefix of 644 and a length of 19",function(){
    detectNetwork('6444567891234567891').should.equal('Discover');
  });
  it("has a prefix of 645 and a length of 16",function(){
    detectNetwork('6454567891234567').should.equal('Discover');
  });
  it("has a prefix of 645 and a length of 19",function(){
    detectNetwork('6451234567891234567').should.equal('Discover');
  });
  it("has a prefix of 646 and a length of 16",function(){
    detectNetwork('6464567891234567').should.equal('Discover');
  });
  it('has a prefix of 646 and a length of 19',function(){
    detectNetwork('6464567891234567891').should.equal('Discover');
  });
  it('has a prefix of 647 and a length of 16',function(){
    detectNetwork('6471234567891234').should.equal('Discover');
  });
  it('has a prefix of 647 and a length of 19',function(){
    detectNetwork('6474567891234567891').should.equal('Discover');
  });
  it('has a prefix of 648 and a length of 16',function(){
    detectNetwork('6481234567891234').should.equal('Discover');
  });
  it('has a prefix of 648 and a length of 19',function(){
    detectNetwork('6481234567891234567').should.equal('Discover');
  });
  it('has a prefix of 649 and a length of 16',function(){
    detectNetwork('6494567891234567').should.equal('Discover');
  });
  it('has a prefix of 649 and a length of 19',function(){
    detectNetwork('6494567891234567891').should.equal('Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var should=chai.should();


  //5018
  //(p: 5018 l: 12)(p: 5018 l: 13)(p: 5018 l: 14)(p: 5018 l: 15)(p: 5018 l: 16)(p: 5018 l: 17)(p: 5018 l: 18)(p: 5018 l: 19)
  var cardDigits='501812345678';
  for(var len=12;len<=19;len++)
  {
    (function(cardDigits,len){
      it("has a prefix of 5018 and a length of "+len,function(){
        detectNetwork(cardDigits).should.equal('Maestro');
      });
    })(cardDigits,len);
    cardDigits=cardDigits+'1';
  }

  //(p: 5020 l: 12)(p: 5020 l: 13)(p: 5020 l: 14)(p: 5020 l: 15)(p: 5020 l: 16)(p: 5020 l: 17)(p: 5020 l: 18)(p: 5020 l: 19)
  var cardDigits='502012345678';
  for(var len=12;len<=19;len++)
  {
    (function(cardDigits,len){
      it("has a prefix of 5020 and a length of "+len,function(){
        detectNetwork(cardDigits).should.equal('Maestro');
      });
    })(cardDigits,len);
    cardDigits=cardDigits+'1';
  }
  
//p: 5038 l: 12)(p: 5038 l: 13)(p: 5038 l: 14)(p: 5038 l: 15)(p: 5038 l: 16)(p: 5038 l: 17)(p: 5038 l: 18)(p: 5038 l: 19)
it("has a prefix of 5038 and a length of 12",function(){
  detectNetwork('503812345678').should.equal('Maestro');
});
it("has a prefix of 5038 and a length of 13",function(){
  detectNetwork('5038567891231').should.equal('Maestro');
});it("has a prefix of 5038 and a length of 14",function(){
  detectNetwork('50385678912312').should.equal('Maestro');
});it("has a prefix of 5038 and a length of 15",function(){
  detectNetwork('503856789123123').should.equal('Maestro');
});it("has a prefix of 5038 and a length of 16",function(){
  detectNetwork('5038567891231234').should.equal('Maestro');
});it("has a prefix of 5038 and a length of 17",function(){
  detectNetwork('50385678912312345').should.equal('Maestro');
});it("has a prefix of 5038 and a length of 18",function(){
  detectNetwork('503856789123123456').should.equal('Maestro');
});it("has a prefix of 5038 and a length of 19",function(){
  detectNetwork('5038567891231234567').should.equal('Maestro');
});
//(p: 6304 l: 12)(p: 6304 l: 13)(p: 6304 l: 14)(p: 6304 l: 15)(p: 6304 l: 16)(p: 6304 l: 17)(p: 6304 l: 18)(p: 6304 l: 19)
it("has a prefix of 6304 and a length of 12",function(){
  detectNetwork('630412345678').should.equal('Maestro')
});
it("has a prefix of 6304 and a length of 13",function(){
  detectNetwork('6304567891231').should.equal('Maestro');
});it("has a prefix of 6304 and a length of 14",function(){
  detectNetwork('63045678912312').should.equal('Maestro');
});it("has a prefix of 6304 and a length of 15",function(){
  detectNetwork('630456789123123').should.equal('Maestro');
});it("has a prefix of 6304 and a length of 16",function(){
  detectNetwork('6304567891231234').should.equal('Maestro');
});it("has a prefix of 6304 and a length of 17",function(){
  detectNetwork('63045678912312345').should.equal('Maestro');
});it("has a prefix of 6304 and a length of 18",function(){
  detectNetwork('630456789123123456').should.equal('Maestro');
});it("has a prefix of 6304 and a length of 19",function(){
  detectNetwork('6304567891231234567').should.equal('Maestro');
});
});
describe("China UnionPay",function(){
  var should=chai.should();
  //622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  for(var prefix=624;prefix<=626;prefix++)
  {
    (function(prefix){
      it("has a prefix of "+ prefix +" and a length of 16",function(){
        detectNetwork(parseInt(prefix)+'4567891234567').should.equal("China UnionPay");
      });
      it("has a prefix of "+ prefix +" and a length of 17",function(){
        detectNetwork(parseInt(prefix)+'45678912345671').should.equal("China UnionPay");
      });
      it("has a prefix of "+ prefix +" and a length of 18",function(){
        detectNetwork(parseInt(prefix)+'456789123456712').should.equal("China UnionPay");
      });
      it("has a prefix of "+ prefix +" and a length of 19",function(){
        detectNetwork(parseInt(prefix)+'4567891234567123').should.equal("China UnionPay");
      });
    })(prefix)
  }
  for(var prefix=6282;prefix<=6288;prefix++)
  {
    (function(prefix){
      it("has a prefix of "+ prefix +" and a length of 16",function(){
        detectNetwork(parseInt(prefix)+'567891234567').should.equal("China UnionPay");
      });
      it("has a prefix of "+ prefix +" and a length of 17",function(){
        detectNetwork(parseInt(prefix)+'5678912345671').should.equal("China UnionPay");
      });
      it("has a prefix of "+ prefix +" and a length of 18",function(){
        detectNetwork(parseInt(prefix)+'56789123456712').should.equal("China UnionPay");
      });
      it("has a prefix of "+ prefix +" and a length of 19",function(){
        detectNetwork(parseInt(prefix)+'567891234567123').should.equal("China UnionPay");
      });
    })(prefix)
  }
  for(var prefix=622126; prefix<=622925;prefix++)
  {
    (function(prefix){
  it("has a prefix of "+ prefix +" and a length of 16",function(){
     detectNetwork(parseInt(prefix)+'1234567891').should.equal("China UnionPay");
  });
  it("has a prefix of "+ prefix +" and a length of 17",function(){
     detectNetwork(parseInt(prefix)+'12345678912').should.equal("China UnionPay");
  });
  it("has a prefix of "+ prefix +" and a length of 18",function(){
     detectNetwork(parseInt(prefix)+'123456789123').should.equal("China UnionPay");
  });
  it("has a prefix of "+ prefix +" and a length of 19",function(){
     detectNetwork(parseInt(prefix)+'1234567891234').should.equal("China UnionPay");
  });
})(prefix)
}
//for(var prefix=624;prefix<=626;prefix)

});

//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
describe("Switch",function(){
  var should=chai.should();
  var prefix=['4903', '4905', '4911', '4936', '564182', '633110', '6333','6759'];
  for(var i=0;i<prefix.length;i++)
  {
    var current=prefix[i];
    var increment=current;
    for(var j=0;j<(16-current.length) ;j++)
    {
      increment=increment+'1';
    }
    (function(current,increment){
      it("has a prefix of "+current+" and a length of 16",function(){
         detectNetwork(increment).should.equal("Switch");
      });
    })(current,increment);

    increment=increment+'11';
      (function(current,increment){
        it("has a prefix of "+current+" and a length of 18",function(){
           detectNetwork(increment).should.equal("Switch");
        });
      })(current,increment);

        increment=increment+'1';
        (function(current,increment){
        it("has a prefix of "+current+ " and a length of 19",function(){
           detectNetwork(increment).should.equal("Switch");
        });
      })(current,increment)
  }
});
