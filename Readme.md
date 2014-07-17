# Add

[![Build Status](https://travis-ci.org/ben-ng/add.svg?branch=master)](https://travis-ci.org/ben-ng/add)

[![browser support](https://ci.testling.com/ben-ng/add.png)
](https://ci.testling.com/ben-ng/add)

A cross-browser, numerically stable way to add floats in Javascript. Produces a faithful rounding of the sum (the result is an immediate floating-point neighbor of the true value).

Algorithm: Rump-Ogita-Oishi

## Usage

```javascript
var add = require('add')
  , evil = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7]
  , dumbsum = function (a,b) { return a+b }

console.log(evil.reduce(dumbsum)) => 15.299999999999999

console.log(add.apply(null, evil)) => 15.3
```

## Performance

The performance benchmark tesll you how much slower `add` is compared to dumb addition. Run it using:

```bash
$ npm run benchmark
```

Here are some results (OS X 10.9.4, 2 GHz Core i7, 8GB DDR3 1600Mhz RAM):

```bash
add-precise x 13,043,885 ops/sec ±2.90% (91 runs sampled)
add-dumb x 11,763,414 ops/sec ±1.89% (92 runs sampled)
native x 91,023,425 ops/sec ±3.52% (84 runs sampled)
native is ~7.0 times faster than add-precise
```

## License

The MIT License (MIT)

Copyright (c) 2014 Ben Ng

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

