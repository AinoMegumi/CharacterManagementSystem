const s = require('@json-spec/core');
const stringNotNullSpec = require('./NotNullText.js');

module.exports = s.object({
    required: {
        column: stringNotNullSpec.spec,
        value: stringNotNullSpec.spec,
    },
});
