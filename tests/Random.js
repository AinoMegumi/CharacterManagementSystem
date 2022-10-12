const Random = require('../core/Random.js');
const assert = require('assert');
const Engine = new Random(Date.now());

describe('Random.js', () => {
    it('range check', () => {
        const val = Engine.nextInt(1, 30);
        assert.equal(val >= 1 && val <= 30, true);
    });
    it('range swap', () => {
        const val = Engine.nextInt(30, 1);
        assert.equal(val >= 1 && val <= 30, true);
    });
    it('range same value', () => {
        const val = Engine.nextInt(10, 10);
        assert.equal(val, 10);
    });
});
