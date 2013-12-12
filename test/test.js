var sift     = require('../'),
    should   = require('should'),
    fixtures = require('./fixtures.json');

describe('sift', function() {
  it('should return 0 for two empty strings', function() {
    sift('', '').should.equal(0);
    sift(null, '').should.equal(0);
    sift('', null).should.equal(0);
  });

  it('should return the length of a string when the other one is empty', function() {
    sift('', 'abcdef').should.equal(6);
    sift(null, 'abcqwe').should.equal(6);
    sift('cde', null).should.equal(3);
  });

  it('should return 0 if two strings are an exact match', function() {
    sift('same', 'same').should.equal(0);
  });

  it('should calculate distance', function() {
    fixtures.forEach(function(item) {
      sift(item.attempt, item.original).should.equal(item.score);
    });
  });
});
