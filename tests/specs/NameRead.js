const NameRead = require('../../core/specs/NameRead.js').valid;
const assert = require('assert');

describe('specs/NameRead.js', () => {
    it('all katakana front no dakuten', () => {
        assert.equal(NameRead('アンドウ　タケシ'), true);
    });
    it('all katakana contain dakuten', () => {
        assert.equal(NameRead('ジョウガサキ　マリア'), true);
    });
    it('hiragana', () => {
        assert.equal(NameRead('あいざわ　まこと'), false);
    });
    it('kanji', () => {
        assert.equal(NameRead('遠藤　博'), false);
    });
});
