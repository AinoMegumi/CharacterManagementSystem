const CheckDigit = require('../core/CheckDigit.js');
const assert = require('assert');

describe('CheckDigit.js', () => {
    it('length is valid', () => {
        assert.equal(CheckDigit(1234567), 9);
        assert.equal(CheckDigit(2014158), 0);
    });
    it('type error', () => {
        assert.equal(CheckDigit('1234567'), null);
    });
});
