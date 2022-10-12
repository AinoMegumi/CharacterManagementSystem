const s = require('@json-spec/core');
const reg_no_year = new RegExp('^(0[1-9]|[1-9]|1[0-2])/([1-9]|0[1-9]|[12][0-9]|3[01])$');
const reg_contain_year = new RegExp('^[0-9]{4}/(0[1-9]|[1-9]|1[0-2])/([1-9]|0[1-9]|[12][0-9]|3[01])$');

/**
 * 年を含まないカレンダーの検査。2月は29までで対応
 * @param {string} text
 * @returns 検査結果
 */
const validDateNoYear = text => {
    if (!reg_no_year.test(text)) return false;
    const splitData = text.split('/');
    const mon = parseInt(splitData[0]);
    const day = parseInt(splitData[1]);
    if (mon === 2) return day <= 29;
    return ((mon <= 7 && mon % 2 === 0) || (mon > 7 && mon % 2 === 1) ? 30 : 31) >= day;
};

/**
 * 年を含むカレンダーの検査
 * @param {string} text
 * @returns 検査結果
 */
const validDate = text => {
    if (!reg_contain_year.test(text)) return false;
    const splitData = text.split('/');
    const year = parseInt(splitData[0]);
    const mon = parseInt(splitData[1]);
    const day = parseInt(splitData[2]);
    const date = new Date(year, mon, 0);
    return date.getDate() >= day;
};

module.exports = {
    valid_no_year: validDateNoYear,
    spec_no_year: s.spec(text => validDateNoYear(text)),
    valid_contain_year: validDate,
    spec_contain_year: s.spec(text => validDate(text)),
};
