const { isMountainArr } = require('./is-mountain-array');

describe('is mountain array tests', () => {
    test('[3, 5, 5] returns false', () => {
        const nums = [3, 5, 5];
        exptected = false;
        expect(isMountainArr(nums)).toBe(expected);
    });

    test('[0, 3, 2, 1] returns true', () => {
        const nums = [0, 3, 2, 1];
        exptected = true;
        expect(isMountainArr(nums)).toBe(expected);
    });

    test('[0, 2, 3, 3, 5, 2, 1, 0] returns false', () => {
        const nums = [0, 2, 3, 3, 5, 2, 1, 0];
        exptected = false;
        expect(isMountainArr(nums)).toBe(expected);
    });
});