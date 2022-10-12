const s = require('@json-spec/core');
const NameReadSpec = require('./NameRead.js');
const NameSpec = require('./Name.js');
const SexSpec = require('./Sex.js');
const DateSpec = require('./Date.js');
const optionSpec = require('./OptionEntryInfo.js');

module.exports = s.object({
    required: {
        name_read: NameReadSpec.spec,
        name: NameSpec.spec,
        sex: SexSpec.spec,
        birthday: DateSpec.spec_no_year,
    },
    optional: {
        option: s.array(optionSpec),
    },
});
