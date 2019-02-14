const math = require('./math');

test('adds 1 + 2 to equal 3', () => {
    expect(math.add(1, 2)).toBe(3);
});

test('subtract 3 by 1 equals 2', () => {
    expect(math.subtract(3, 1)).toBe(2);
})

test('sqrt of 4 is 2', () => {
    expect(math.sqrt(4)).toBe(2);
})