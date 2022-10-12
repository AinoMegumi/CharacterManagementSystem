const s = require('@json-spec/core');

const textIsValid = str => typeof str === 'string' && str.length > 0;

module.exports = {
    valid: textIsValid,
    spec: s.spec(str => textIsValid(str)),
};
