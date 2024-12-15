// test/calculator.test.js
const { expect } = require('chai');
const { add, subtract } = require('../calculator');

describe('Calculator Functions', () => {
    describe('add()', () => {
        it('should return 5 for add(2, 3)', () => {
            expect(add(2, 3)).to.equal(5);
        });

        it('should return 0 for add(-2, 2)', () => {
            expect(add(-2, 2)).to.equal(0);
        });
    });

    describe('subtract()', () => {
        it('should return 1 for subtract(3, 2)', () => {
            expect(subtract(3, 2)).to.equal(1);
        });

        it('should return -4 for subtract(2, 6)', () => {
            expect(subtract(2, 6)).to.equal(-4);
        });
    });
});
