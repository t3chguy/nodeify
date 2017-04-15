# NodifiedPromise

  Convert promised code to use node style callbacks.  If no callback is provided it will just return the original promise.

## Installation

  Server:

    $ npm install nodeify


## Usage

```javascript
const Promise = require('nodifiedPromise');
```
After this, all Promises instantiated from this class will have a `.nodeify(cb)` method 
which allows you to easily make a thenable library compatible with callbacks.


## Licence

  MIT
