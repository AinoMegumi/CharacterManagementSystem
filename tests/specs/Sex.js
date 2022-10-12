const SexSpec = require('../../core/specs/Sex.js');
const assert = require('assert');

describe('specs/Sex.js', () => {
    it('valid case', () => {
        assert.equal(SexSpec.valid('male'), true);
        assert.equal(SexSpec.valid('female'), true);
        assert.equal(SexSpec.valid('girlboy'), true);
        assert.equal(SexSpec.valid('guygirl'), true);
    });
    it('invalid case', () => {
        assert.equal(SexSpec.valid('man'), false);
        assert.equal(SexSpec.valid('woman'), false);
        assert.equal(SexSpec.valid('gentleman'), false);
        assert.equal(SexSpec.valid('lady'), false);
    });
    it('null case', () => {
        assert.equal(SexSpec.valid(null), false);
        assert.equal(SexSpec.valid(undefined), false);
    });
});
