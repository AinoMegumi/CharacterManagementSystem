const s = require('@json-spec/core');
const fs = require('fs');
const algorithmData = JSON.parse(fs.readFileSync('./IDGenAlgorithmData.json')); // 呼び出し元からの相対パスなのでシステムそのもののルートディレクトリからの相対パスで書く必要がある

const sexIsValid = text => {
    if (text == null) return false;
    return algorithmData.sex.find(v => v.text === text) != null;
};

module.exports = {
    valid: sexIsValid,
    spec: s.spec(text => sexIsValid(text)),
};
