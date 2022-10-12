const IDGen = require('../core/IDGenerator.js');
const IDCheck = require('../core/specs/ReferenceNumber.js');
const assert = require('assert');

describe('IDGenerator.js', () => {
    it('no dakuten', () => {
        const ID = IDGen('アンドウ　タケシ', 'male');
        console.log(ID);
        assert.equal(IDCheck.valid(ID), true);
    });
    it('contain dakuten', () => {
        const ID = IDGen('ジョウガサキ　マリア', 'female');
        console.log(ID);
        assert.equal(IDCheck.valid(ID), true);
    });
    it('full hiragana', () => {
        const ID = IDGen('あいざわ　まこと', 'male');
        assert.equal(ID, null);
    });
    it('full kanji', () => {
        const ID = IDGen('遠藤　博', 'male');
        assert.equal(ID, null);
    });
    it('contain hiragana', () => {
        const ID = IDGen('マツモト　みずほ', 'female');
        assert.equal(ID, null);
    });
    it('contain kanji', () => {
        const ID = IDGen('キムラ　雄介', 'male');
        assert.equal(ID, null);
    });
    it('sex error', () => {
        const ID = IDGen('オオクラ　アイカ', 'woman');
        assert.equal(ID, null);
    });
});
