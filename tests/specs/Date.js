const DateSpec = require('../../core/specs/Date.js');
const assert = require('assert');

describe('specs/Date.js', () => {
    it('valid date/no year', () => {
        assert.equal(DateSpec.valid_no_year('1/1'), true);
        assert.equal(DateSpec.valid_no_year('2/1'), true);
        assert.equal(DateSpec.valid_no_year('3/1'), true);
        assert.equal(DateSpec.valid_no_year('4/1'), true);
        assert.equal(DateSpec.valid_no_year('5/1'), true);
        assert.equal(DateSpec.valid_no_year('6/1'), true);
        assert.equal(DateSpec.valid_no_year('7/1'), true);
        assert.equal(DateSpec.valid_no_year('8/1'), true);
        assert.equal(DateSpec.valid_no_year('9/1'), true);
        assert.equal(DateSpec.valid_no_year('10/1'), true);
        assert.equal(DateSpec.valid_no_year('11/1'), true);
        assert.equal(DateSpec.valid_no_year('12/1'), true);

        assert.equal(DateSpec.valid_no_year('01/01'), true);
        assert.equal(DateSpec.valid_no_year('02/01'), true);
        assert.equal(DateSpec.valid_no_year('03/01'), true);
        assert.equal(DateSpec.valid_no_year('04/01'), true);
        assert.equal(DateSpec.valid_no_year('05/01'), true);
        assert.equal(DateSpec.valid_no_year('06/01'), true);
        assert.equal(DateSpec.valid_no_year('07/01'), true);
        assert.equal(DateSpec.valid_no_year('08/01'), true);
        assert.equal(DateSpec.valid_no_year('09/01'), true);
        assert.equal(DateSpec.valid_no_year('10/01'), true);
        assert.equal(DateSpec.valid_no_year('11/01'), true);
        assert.equal(DateSpec.valid_no_year('12/01'), true);

        assert.equal(DateSpec.valid_no_year('1/31'), true);
        assert.equal(DateSpec.valid_no_year('2/29'), true);
        assert.equal(DateSpec.valid_no_year('3/31'), true);
        assert.equal(DateSpec.valid_no_year('4/30'), true);
        assert.equal(DateSpec.valid_no_year('5/31'), true);
        assert.equal(DateSpec.valid_no_year('6/30'), true);
        assert.equal(DateSpec.valid_no_year('7/31'), true);
        assert.equal(DateSpec.valid_no_year('8/31'), true);
        assert.equal(DateSpec.valid_no_year('9/30'), true);

        assert.equal(DateSpec.valid_no_year('01/31'), true);
        assert.equal(DateSpec.valid_no_year('02/29'), true);
        assert.equal(DateSpec.valid_no_year('03/31'), true);
        assert.equal(DateSpec.valid_no_year('04/30'), true);
        assert.equal(DateSpec.valid_no_year('05/31'), true);
        assert.equal(DateSpec.valid_no_year('06/30'), true);
        assert.equal(DateSpec.valid_no_year('07/31'), true);
        assert.equal(DateSpec.valid_no_year('08/31'), true);
        assert.equal(DateSpec.valid_no_year('09/30'), true);
        assert.equal(DateSpec.valid_no_year('10/31'), true);
        assert.equal(DateSpec.valid_no_year('11/30'), true);
        assert.equal(DateSpec.valid_no_year('12/31'), true);
    });

    it('invalid date/no year', () => {
        assert.equal(DateSpec.valid_no_year('1/0'), false);
        assert.equal(DateSpec.valid_no_year('2/30'), false);
        assert.equal(DateSpec.valid_no_year('0/31'), false);
        assert.equal(DateSpec.valid_no_year('13/32'), false);
        assert.equal(DateSpec.valid_no_year(null), false);
    });

    it('split is invalid/no year', () => {
        assert.equal(DateSpec.valid_no_year('1-31'), false);
        assert.equal(DateSpec.valid_no_year('1.31'), false);
    });

    it('no split/no year', () => {
        assert.equal(DateSpec.valid_no_year('0131'), false);
        assert.equal(DateSpec.valid_no_year('131'), false);
    });

    it('valid date/contain year', () => {
        assert.equal(DateSpec.valid_contain_year('2020/1/1'), true);
        assert.equal(DateSpec.valid_contain_year('2020/2/1'), true);
        assert.equal(DateSpec.valid_contain_year('2020/3/1'), true);
        assert.equal(DateSpec.valid_contain_year('2020/4/1'), true);
        assert.equal(DateSpec.valid_contain_year('2020/5/1'), true);
        assert.equal(DateSpec.valid_contain_year('2020/6/1'), true);
        assert.equal(DateSpec.valid_contain_year('2020/7/1'), true);
        assert.equal(DateSpec.valid_contain_year('2020/8/1'), true);
        assert.equal(DateSpec.valid_contain_year('2020/9/1'), true);
        assert.equal(DateSpec.valid_contain_year('2020/10/1'), true);
        assert.equal(DateSpec.valid_contain_year('2020/11/1'), true);
        assert.equal(DateSpec.valid_contain_year('2020/12/1'), true);

        assert.equal(DateSpec.valid_contain_year('2020/01/01'), true);
        assert.equal(DateSpec.valid_contain_year('2020/02/01'), true);
        assert.equal(DateSpec.valid_contain_year('2020/03/01'), true);
        assert.equal(DateSpec.valid_contain_year('2020/04/01'), true);
        assert.equal(DateSpec.valid_contain_year('2020/05/01'), true);
        assert.equal(DateSpec.valid_contain_year('2020/06/01'), true);
        assert.equal(DateSpec.valid_contain_year('2020/07/01'), true);
        assert.equal(DateSpec.valid_contain_year('2020/08/01'), true);
        assert.equal(DateSpec.valid_contain_year('2020/09/01'), true);
        assert.equal(DateSpec.valid_contain_year('2020/10/01'), true);
        assert.equal(DateSpec.valid_contain_year('2020/11/01'), true);
        assert.equal(DateSpec.valid_contain_year('2020/12/01'), true);

        assert.equal(DateSpec.valid_contain_year('2020/1/31'), true);
        assert.equal(DateSpec.valid_contain_year('2020/2/29'), true);
        assert.equal(DateSpec.valid_contain_year('2020/3/31'), true);
        assert.equal(DateSpec.valid_contain_year('2020/4/30'), true);
        assert.equal(DateSpec.valid_contain_year('2020/5/31'), true);
        assert.equal(DateSpec.valid_contain_year('2020/6/30'), true);
        assert.equal(DateSpec.valid_contain_year('2020/7/31'), true);
        assert.equal(DateSpec.valid_contain_year('2020/8/31'), true);
        assert.equal(DateSpec.valid_contain_year('2020/9/30'), true);

        assert.equal(DateSpec.valid_contain_year('2020/01/31'), true);
        assert.equal(DateSpec.valid_contain_year('2020/02/29'), true);
        assert.equal(DateSpec.valid_contain_year('2020/03/31'), true);
        assert.equal(DateSpec.valid_contain_year('2020/04/30'), true);
        assert.equal(DateSpec.valid_contain_year('2020/05/31'), true);
        assert.equal(DateSpec.valid_contain_year('2020/06/30'), true);
        assert.equal(DateSpec.valid_contain_year('2020/07/31'), true);
        assert.equal(DateSpec.valid_contain_year('2020/08/31'), true);
        assert.equal(DateSpec.valid_contain_year('2020/09/30'), true);
        assert.equal(DateSpec.valid_contain_year('2020/10/31'), true);
        assert.equal(DateSpec.valid_contain_year('2020/11/30'), true);
        assert.equal(DateSpec.valid_contain_year('2020/12/31'), true);
    });

    it('invalid date/contain year', () => {
        assert.equal(DateSpec.valid_contain_year('2020/1/0'), false);
        assert.equal(DateSpec.valid_contain_year('2020/2/30'), false);
        assert.equal(DateSpec.valid_contain_year('2020/0/31'), false);
        assert.equal(DateSpec.valid_contain_year('2020/13/32'), false);
        assert.equal(DateSpec.valid_contain_year('2021/2/29'), false);
        assert.equal(DateSpec.valid_contain_year(null), false);
    });

    it('split is invalid/contain year', () => {
        assert.equal(DateSpec.valid_no_year('2020/1-31'), false);
        assert.equal(DateSpec.valid_no_year('2020/1.31'), false);
        assert.equal(DateSpec.valid_no_year('2020-1-31'), false);
        assert.equal(DateSpec.valid_no_year('2020.1.31'), false);
    });

    it('no split/contain year', () => {
        assert.equal(DateSpec.valid_no_year('20200131'), false);
    });
});
