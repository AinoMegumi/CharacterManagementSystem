const NameSpec = require('../../core/specs/Name.js');
const assert = require('assert');

describe('specs/Name.js', () => {
    it('vaid name format', () => {
        assert.equal(NameSpec.valid('野口　英世'), true);
        assert.equal(NameSpec.valid('ヘレン・ケラー'), false);
        assert.equal(NameSpec.valid('ウォルフガング　アマデウス・モーツァルト'), true);
        assert.equal(NameSpec.valid('ウォルフガング・アマデウス　モーツァルト'), true);
    });
    it('invalid format', () => {
        assert.equal(NameSpec.valid('野口英世'), false);
        assert.equal(NameSpec.valid('ヘレン・ケラー'), false);
        assert.equal(NameSpec.valid('ウォルフガング・アマデウス・モーツァルト'), false);
    });
    it('null case', () => {
        assert.equal(NameSpec.valid(null), false);
    });
});
