const CharacterEntry = require('../../core/specs/CharacterEntry.js');
const s = require('@json-spec/core');
const assert = require('assert');
const validPattern_no_opton = {
    name_read: 'アサクラ　カオリ',
    name: '朝倉　香織',
    sex: 'female',
    birthday: '4/27',
};

const validPattern_contain_opton = {
    name_read: 'オオツキ　マサヒロ',
    name: '大槻　正弘',
    sex: 'male',
    birthday: '2/10',
    option: [
        { column: '住所', value: 'つむぎの市' },
        { column: '身長', value: '174cm' },
    ],
};

const invalidPattern_type_error = {
    name_read: 'ミカワ　ナオコ',
    name: '三河　尚子',
    sex: 3,
    birthday: '10/4',
    option: [
        { column: '住所', value: 'つむぎの市' },
        { column: '身長', value: '149cm' },
    ],
};

const invalidPattern_property_error = {
    name_read: 'シノダ　シノブ',
    name: '篠田　忍',
    sex: 'girlboy',
    option: [
        { column: '住所', value: 'つむぎの市' },
        { column: '身長', value: '149cm' },
    ],
};

describe('specs/CharacterEntry.js', () => {
    it('valid format', () => {
        assert.equal(s.isValid(CharacterEntry, validPattern_no_opton), true);
        assert.equal(s.isValid(CharacterEntry, validPattern_contain_opton), true);
    });
    it('type error', () => {
        assert.equal(s.isValid(CharacterEntry, invalidPattern_type_error), false);
    });
    it('property error', () => {
        assert.equal(s.isValid(CharacterEntry, invalidPattern_property_error), false);
    });
});
