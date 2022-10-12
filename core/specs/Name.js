const s = require('@json-spec/core');
const reg = new RegExp(/^(.+?)\s(.+)$/);

/**
 * 名前の書式を満たしているかの検査を行う
 * @params {string} text
 * @returns {boolean} 検査結果
 */
const nameIsValid = text => reg.test(text);

module.exports = {
    valid: nameIsValid,
    spec: s.spec(text => nameIsValid(text)),
};
