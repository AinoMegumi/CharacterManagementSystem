const s = require('@json-spec/core');
const checkDigit = require('../CheckDigit.js');
const IDReg = new RegExp(/^([0-6,8][0-9]|[7,9][0-5])[0-9]{4}[0-3][0-9]$/);

const NumIsValid = refnum => {
    if (typeof refnum === 'number') return NumIsValid(refnum.toString());
    if (typeof refnum !== 'string' || refnum == null) return false;
    const formattedRefNum = refnum.padStart(8, '0');
    const numRefNum = parseInt(refnum);
    const checkDigitVal = checkDigit(Math.floor(numRefNum / 10));
    return IDReg.test(formattedRefNum) && checkDigitVal === numRefNum % 10;
};

module.exports = {
    /**
     *
     * @param {string|number} refnum 整理番号
     * @returns
     */
    valid: refnum => NumIsValid(refnum),
    spec: s.spec(num => NumIsValid(num)),
};
