const NameRead = require('./specs/NameRead.js');

module.exports = text => {
    if (!NameRead.valid(text)) return null;
    return text[0].normalize('NFD')[0];
};
