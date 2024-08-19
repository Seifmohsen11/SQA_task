const { calculator } = require('./calc');
describe("calculator",function(){
test("basic operations", function(){
    expect(calculator(2,2,'*')).toBe(4);
    expect(calculator(2,2,'/')).toBe(1);
    expect(calculator(2,2,'-')).toBe(0);
    expect(calculator(2,2,'+')).toBe(4);
});
test("invalid operator", function(){
    expect(calculator(2, 2, '%').message).toBe("invalide operator");   
    expect(calculator(2, 2, '%').success).toBe(false);
});
test("invalid input", function(){
    expect(() => calculator("2", 2, '+')).toThrow("Please enter number");
    expect(() => calculator(2, "2", '+')).toThrow("Please enter number");
});
test("Division by Zero", function() {
    expect(calculator(0, 0, '/')).toBe(NaN);
    expect(calculator(5, 0, '/')).toBe(Infinity);
});
})