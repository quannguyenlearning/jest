const math = require('./math');
const mathLib = require('mathjs');

test('adds 1 + 2 to equal 3', () => {
    expect(math.add(1, 2)).toBe(3);
});

test('subtract 3 by 1 equals 2', () => {
    expect(math.subtract(3, 1)).toBe(2);
})

describe('Mock test', () => {
    // Mock some functions of the external math library
    mathLib.sqrt = jest.fn();

    test('sqrt of 4 is 2', () => {
        /// Arrange
        mathLib.sqrt.mockReturnValue(2);

        /// Action
        let returnedValue = math.sqrt(4);

        /// Assert
        expect(mathLib.sqrt).toHaveBeenCalledWith(4);
        expect(returnedValue).toBe(2);
    })
})