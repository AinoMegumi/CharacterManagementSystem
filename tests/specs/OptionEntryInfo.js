const OptionEntryInfoSpec = require('../../core/specs/OptionEntryInfo.js');
const s = require('@json-spec/core');
const assert = require('assert');

describe('specs/OptionEntryInfo.js', () => {
    it('valid format', () => {
        assert.equal(s.isValid(OptionEntryInfoSpec, { column: '身長', value: '159cm' }), true);
    });
    it('type error', () => {
        assert.equal(s.isValid(OptionEntryInfoSpec, { column: '身長', value: 159 }), false);
        assert.equal(s.isValid(OptionEntryInfoSpec, { column: 0, value: '159cm' }), false);
    });
    it('property error', () => {
        assert.equal(s.isValid(OptionEntryInfoSpec, { column: '身長' }), false);
        assert.equal(s.isValid(OptionEntryInfoSpec, { value: '159cm' }), false);
    });
});
