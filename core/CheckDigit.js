//const numReg = new RegExp('[0-9]{7}');

/**
 * モジュラス10ウェイト2・1分割方式でチェックディジットを求める
 * @param {number} num チェックディジットを算出する通知
 * @returns {number|null} チェックディジット
 */
module.exports = num => {
    if (typeof num !== 'number') return null;
    const numText = num.toString().padStart(7, '0');
    let calcBase = 0,
        index = 0;
    Array.prototype.forEach.call(numText, v => {
        let i = parseInt(v) * (1 + (index++ % 2));
        if (i > 10) i = Math.floor(i / 10) + (i % 10);
        calcBase += i;
    });
    const mod = calcBase % 10;
    return mod === 0 ? 0 : 10 - mod;
};
