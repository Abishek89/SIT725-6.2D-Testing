const { expect } = require('chai');
const { add, subtract } = require('../calculator');

describe('Calculator Functions', () => {
    // Test cases for the add() function
    describe('add()', () => {
        it('should return 5 for add(2, 3)', () => {
            expect(add(2, 3)).to.equal(5);
        });

        it('should return 0 for add(-2, 2)', () => {
            expect(add(-2, 2)).to.equal(0);
        });

        it('should return 0 for add(0, 0)', () => {
            expect(add(0, 0)).to.equal(0);
        });

        it('should return -5 for add(-3, -2)', () => {
            expect(add(-3, -2)).to.equal(-5);
        });

        it('should handle floating-point numbers correctly', () => {
            expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.0001);
        });

        it('should return NaN if any input is not a number', () => {
            expect(add(2, 'a')).to.be.NaN;
        });

        it('should return NaN if only one argument is provided', () => {
            expect(add(5)).to.be.NaN;
        });
    });

    // Test cases for the subtract() function
    describe('subtract()', () => {
        it('should return 1 for subtract(3, 2)', () => {
            expect(subtract(3, 2)).to.equal(1);
        });

        it('should return -4 for subtract(2, 6)', () => {
            expect(subtract(2, 6)).to.equal(-4);
        });

        it('should return 0 for subtract(0, 0)', () => {
            expect(subtract(0, 0)).to.equal(0);
        });

        it('should return -1 for subtract(2, 3)', () => {
            expect(subtract(2, 3)).to.equal(-1);
        });

        it('should handle floating-point numbers correctly', () => {
            expect(subtract(0.3, 0.1)).to.be.closeTo(0.2, 0.0001);
        });

        it('should return NaN if any input is not a number', () => {
            expect(subtract(2, 'b')).to.be.NaN;
        });

        it('should return NaN if only one argument is provided', () => {
            expect(subtract(5)).to.be.NaN;
        });
    });
});
