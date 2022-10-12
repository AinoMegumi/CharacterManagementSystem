const ReferenceNumberSpec = require('../../core/specs/ReferenceNumber.js');
const assert = require('assert');

describe('specs/ReferenceNumber.js', () => {
    it('valid number', () => {
        assert.equal(ReferenceNumberSpec.valid('01135701'), true);
        assert.equal(ReferenceNumberSpec.valid(22139213), true);
    });
    it('check digit error', () => {
        assert.equal(ReferenceNumberSpec.valid(1135704), false);
        assert.equal(ReferenceNumberSpec.valid('22139219'), false);
    });
    it('null', () => {
        assert.equal(ReferenceNumberSpec.valid(null), false);
    });
});
