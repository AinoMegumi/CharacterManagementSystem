const pickupFront = require('../core/GetFrontTextForIDGenerator.js');
const assert = require('assert');

describe('GetFrontTextForIDGenerator.js', () => {
    it('no dakuten', () => {
        assert.equal(pickupFront('アンドウ　タケシ'), 'ア');
    });
    it('contain dakuten', () => {
        assert.equal(pickupFront('ジョウガサキ　マリア'), 'シ');
    });
    it('full hiragana', () => {
        assert.equal(pickupFront('あいざわ　まこと'), null);
    });
    it('full kanji', () => {
        assert.equal(pickupFront('遠藤　博'), null);
    });
    it('contain hiragana', () => {
        assert.equal(pickupFront('マツモト　みずほ'), null);
    });
    it('contain kanji', () => {
        assert.equal(pickupFront('キムラ　雄介'), null);
    });
});
