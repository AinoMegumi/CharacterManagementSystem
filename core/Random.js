const MersenneTwister = require('mersennetwister');

module.exports = class {
    constructor(seed) {
        this.mt = new MersenneTwister(seed);
    }
    /**
     * min以上max以下の乱数を生成する
     * @param {number} min
     * @param {number} max
     * @returns 乱数
     */
    nextInt(min, max) {
        if (min === max) return min;
        if (min > max) return this.nextInt(max, min);
        const randVal = Math.floor(this.mt.random());
        return min + (randVal % (max + 1 - min));
    }
};
