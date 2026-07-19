/**
* Tests for numeric stability
*/
var algorithm = require('./')
  , test = require('tape')
  , badVector

badVector = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7]

test('fastSum', function (t) {
    t.plan(1);

    t.deepEqual(algorithm.fastTwoSum(1/3, 1/6)
                , [0.5, -2.7755575615628914e-17, null]
                , 'Result and error should have been returned')
});

test('nextPowerTwo', function (t) {
  t.plan(1)

  t.equal(algorithm.nextPowerTwo(1534)
              , 2048
              , 'Should be Math.pow(2, Math.ceil(algorithm.logBase2(Math.abs(1534))))')
})

test('accumulate', function (t) {
  t.plan(7)


  t.equal(algorithm([1,2,3,4]), 10, 'Integer sum should work')


  t.equal(algorithm.dumbSum(badVector), 15.299999999999999, 'Inaccurate summation using naive method')

  t.equal(algorithm(badVector), 15.3, 'Rump-Ogita-Oishi summation of insidious sum')

  t.equal(algorithm([0, 0, 0]), 0, 'Rump-Ogita-Oishi summation of zero array')

  t.equal(algorithm([]), 0, 'Rump-Ogita-Oishi summation of empty array')

  // Regression test: arrays long enough to push nextPowerTwo(p.length + 2)
  // past ~30 used to overflow the sigma scaling factor and recurse forever
  t.equal(algorithm(badVector.concat(badVector)), 30.6, 'Rump-Ogita-Oishi summation of a longer insidious sum should not blow the stack')

  var sequential = []
  for (var i = 1; i <= 1000; ++i) sequential.push(i)

  t.equal(algorithm(sequential), 500500, 'Rump-Ogita-Oishi summation of a large array should not blow the stack')
})

