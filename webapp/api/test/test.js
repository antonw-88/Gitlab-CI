const helpMethods = require('../helpMethods/helpMethods');

(function () {
  var assert = require('chai').assert;
  describe('Test method getRandomString', function () {
    describe('Check if method getRandomString returns a random string', function () {
      it('Should return true if test passes', function () {
        let testArray = [{ string: 'random01' }, { string: 'random02' }, { string: 'random03' }]
        assert.equal('string', typeof helpMethods.getRandomString(testArray))
      })
    })
  })
}())
