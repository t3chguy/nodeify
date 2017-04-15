'use strict';

let nextTick;
if (typeof setImmediate === 'function') nextTick = setImmediate;
else if (typeof process === 'object' && process && process.nextTick) nextTick = process.nextTick;
else nextTick = function (cb) { setTimeout(cb, 0) };

module.exports = class extends Promise {

    nodeify(cb) {
        if (typeof cb !== 'function') return this;
        return this
            .then(function (res) {
                nextTick(function () { cb(null, res) });
            }, function (err) {
                nextTick(function () { cb(err); });
            });
    }

};
