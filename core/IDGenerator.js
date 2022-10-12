const Random = require('./Random.js');
const fs = require('fs');
const pickupFront = require('./GetFrontTextForIDGenerator.js');
const checkDigit = require('./CheckDigit.js');
const algorithmData = JSON.parse(fs.readFileSync('./IDGenAlgorithmData.json')); // 呼び出し元からの相対パスなのでシステムそのもののルートディレクトリからの相対パスで書く必要がある
/**
 * キャラクターの名前と性別から８桁の整理番号を生成する
 * @param {string} name キャラクターの名前（カタカナ）
 * @param {string} sex キャラクターの性別
 * @returns {string|null} 整理番号
 */
module.exports = (name, sex) => {
    const frontText = pickupFront(name);
    if (frontText == null) return null;
    const current = Date.now();
    const random = new Random(current);
    const nameIdInfo = algorithmData.name.find(e => frontText === e.text);
    const sexIdInfo = algorithmData.sex.find(e => sex === e.text);
    if (nameIdInfo == null || sexIdInfo == null) return null;
    const baseNumberFront = [nameIdInfo.main_number, nameIdInfo.sub_number];
    const baseNumber =
        baseNumberFront[current % 2].toString().padStart(2, '0') +
        random.nextInt(0, 9999).toString().padStart(4, '0') +
        sexIdInfo.number;
    return baseNumber + checkDigit(parseInt(baseNumber));
};
