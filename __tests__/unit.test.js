// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('true email 1', () => {
    let isEmailOutput = functions.isEmail("chashim@ucsd.edu");
    expect(isEmailOutput).toBe(true);
});