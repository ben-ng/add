/**
* Tests for numeric stability
*/
var algorithm = require('./')
  , assert = require('assert')
  , stupidAccumulate = function (a, b) { return a + b }
  , badVector

badVector = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7]

assert.deepEqual(algorithm.fastTwoSum(1/3, 1/6)
                , [0.5, -2.7755575615628914e-17, null]
                , 'Result and error should have been returned')

assert.equal(algorithm.nextPowerTwo(1534)
            , 2048
            , 'Should be Math.pow(2, Math.ceil(algorithm.logBase2(Math.abs(1534))))')

assert.equal(algorithm([1,2,3,4]), 10, 'Integer sum should work')

assert.equal(badVector.reduce(stupidAccumulate), 15.299999999999999, 'Inaccurate summation using naive method')

assert.equal(algorithm(badVector), 15.3, 'Rump-Ogita-Oishi summation of insidious sum')

assert.equal(algorithm([0]), 0, 'Rump-Ogita-Oishi summation of zero array')

algorithm([2e52, 2e-52])
