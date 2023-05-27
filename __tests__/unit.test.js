// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isEmail tests
test('tests if school email is a valid email (true1)', () => {
    let isEmailOutput = functions.isEmail("chashim@ucsd.edu");
    expect(isEmailOutput).toBe(true);
});

test('tests if gmail is valid email (true2)', () => {
    let isEmailOutput = functions.isEmail("thelittlehashbrown@gmail.com");
    expect(isEmailOutput).toBe(true);
});

test('tests if website is valid email (false1)', () => {
    let isEmailOutput = functions.isEmail("youtube.com");
    expect(isEmailOutput).toBe(false);
});

test('tests if random word is valid email (false2)', () => {
    let isEmailOutput = functions.isEmail("CSE110");
    expect(isEmailOutput).toBe(false);
});

//isPhoneNumber tests
test('is real phone number a valid phone number (true1)', () => {
    isPhoneNumberOutput = functions.isPhoneNumber("(858) 246-4357");
    expect(isPhoneNumberOutput).toBe(true);
});

test('is random phone number a valid phone number (true2)', () => {
    isPhoneNumberOutput = functions.isPhoneNumber("(888)888-8888");
    expect(isPhoneNumberOutput).toBe(true);
});

test('check phones number with letters (false1)', () => {
    isPhoneNumberOutput = functions.isPhoneNumber("(888)abc-8888");
    expect(isPhoneNumberOutput).toBe(false);
});

test('check phone number with wrong formatting (false2)', () => {
    isPhoneNumberOutput = functions.isPhoneNumber("8888888888");
    expect(isPhoneNumberOutput).toBe(false);
});

//isStrongPassword tests
test('check short password (true1)', () => {
    isStrongPasswordOutput = functions.isStrongPassword("abcd");
    expect(isStrongPasswordOutput).toBe(true);
});

test('check long valid password (true2)', () => {
    isStrongPasswordOutput = functions.isStrongPassword("th1sisapassword");
    expect(isStrongPasswordOutput).toBe(true);
});

test('check password with non-letter start (false2)', () => {
    isStrongPasswordOutput = functions.isStrongPassword("1apassword");
    expect(isStrongPasswordOutput).toBe(false);
});

test('check password that is too long (false1)', () => {
    isStrongPasswordOutput = functions.isStrongPassword("thisisapassword123");
    expect(isStrongPasswordOutput).toBe(false);
});

//isDate tests
test('normal valid date (true1)', () => {
    isDateOutput = functions.isDate("01/01/2023");
    expect(isDateOutput).toBe(true);
});

test('abnormal date (true2)', () => {
    isDateOutput = functions.isDate("91/91/9999");
    expect(isDateOutput).toBe(true);
});

test('incorrect format, valid date (false1)', () => {
    isDateOutput = functions.isDate("01012023");
    expect(isDateOutput).toBe(false);
});

test('correct format, letters injected (false2)', () => {
    isDateOutput = functions.isDate("01/0l/2023");
    expect(isDateOutput).toBe(false);
});

//isHexColor tests
test('checks valid hexcode with # (true1)', () => {
    isHexColorOutput = functions.isHexColor("#FFCE30");
    expect(isHexColorOutput).toBe(true);
});

test('checks valid hexcode without # (true2)', () => {
    isHexColorOutput = functions.isHexColor("FFCE30");
    expect(isHexColorOutput).toBe(true);
});

test('checks invald hexcode (false1)', () => {
    isHexColorOutput = functions.isHexColor("30");
    expect(isHexColorOutput).toBe(false);
});

test('checks invalid characters (false2)', () => {
    isHexColorOutput = functions.isHexColor("#FFCE$0");
    expect(isHexColorOutput).toBe(false);
});