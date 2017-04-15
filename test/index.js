'use strict';

require('mocha-as-promised')();
const assert = require('assert');
const Promise = require('../');

const A = {};
const B = {};


describe('NodifiedPromise::nodeify(cb)', function () {
    it('adds the nodeify method to promise (including promises resulting from calling promise.then)', function (done) {
        new Promise(function (res) { res(A) })
            .then(() => B)
            .then(function (res) {
                assert(res === B);
                return A;
            })
            .nodeify(function (err, res) {
                if (err) return done(err);
                assert(res === A);
                done();
            });
    });
});

describe("require('nodifiedPromise')", function () {
    it('adds the nodeify method on to all promises inheriting from Promise', function () {
        assert(typeof Promise.prototype.nodeify === 'function');
    });
});