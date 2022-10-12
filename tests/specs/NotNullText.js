const NotNullTextSpec = require('../../core/specs/NotNullText.js');
const assert = require('assert');

describe('specs/NotNullText.js', () => {
    it('ok', () => {
        assert.equal(NotNullTextSpec.valid('あああああ'), true);
    });
    it('null', () => {
        assert.equal(NotNullTextSpec.valid(null), false);
    });
    it('empty text', () => {
        assert.equal(NotNullTextSpec.valid(''), false);
    });
});
