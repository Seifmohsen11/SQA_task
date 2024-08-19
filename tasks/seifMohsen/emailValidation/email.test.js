const { validateEmail }  = require('./email.js');
describe("emailValidation",function(){
    test("Valid email addresses", () => {
        expect(validateEmail("seifmohsen859@gmail.com")).toBe(true);
        expect(validateEmail("seif@yahoo.com")).toBe(true);
    });
    test('Invalid email addresses', () => {
    expect(validateEmail('seif')).toBe(false); 
    expect(validateEmail('@seif.com')).toBe(false); 
    expect(validateEmail('seif@.com')).toBe(false); 
    expect(validateEmail('seif@com')).toBe(false); 
    expect(validateEmail('seif@gmail.c')).toBe(false); 
    });
    test('Non string inputs', () => {
    expect(() => validateEmail(123)).toThrow("Please enter string");
    expect(() => validateEmail(null)).toThrow("Please enter string"); 
    expect(() => validateEmail(undefined)).toThrow("Please enter string"); 
    expect(() => validateEmail(true)).toThrow("Please enter string"); 
    expect(() => validateEmail(false)).toThrow("Please enter string"); 
    expect(validateEmail('')).toBe(false);
});
})