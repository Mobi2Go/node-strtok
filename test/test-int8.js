// Test reading int8 values.

var assert = require('assert');
var util = require('./util');
var strtok = require('../lib/strtok');

util.runTest('\x00\x7f\x80\xff\x81', [
    function(v) {
        assert.ok(v === undefined);
        return strtok.INT8;
    },
    function(v) {
        assert.equal(v, 0);
        return strtok.INT8;
    },
    function(v) {
        assert.equal(v, 127);
        return strtok.INT8;
    },
    function(v) {
        assert.equal(v, -128);
        return strtok.INT8;
    },
    function(v) {
        assert.equal(v, -1);
        return strtok.INT8;
    },
    function(v) {
        assert.equal(v, -127);
        return strtok.INT8;
    }
]);
