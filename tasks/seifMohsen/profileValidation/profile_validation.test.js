var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

expect.extend({
    HaveValidProfile(received) {
        if (typeof received !== 'object' || received === null || Array.isArray(received)) {
            throw new Error("Please enter an object");
        }
        const ValidName = (typeof received.name === 'string') && (received.name !== '');
        const ValidEmail = (typeof received.email === 'string') && (emailRegex.test(received.email));
        const ValidAge = (typeof received.age === 'number') && (received.age >= 18);

        const pass = ValidName && ValidEmail && ValidAge;
        if (pass) {
            return {
                pass: true,
                message: () => `profile is Valid`
            }
        } else {
            return {
                pass: false,
                message: () => `profile is invalid`
            }
        }
    }
})

test(`Check profile is valid or not`, () => {
    expect({name: 'Seif Mohsen', email: 'seifmohsen@gmail.com', age: 21}).HaveValidProfile();
    expect({name: '', email: 'seifmohsen@gmail.com', age: 21}).not.HaveValidProfile();
    expect({name: 'Seif', email: 'seif.com', age: 21}).not.HaveValidProfile();
    expect({name: 'seif', email: 'seifmohsen@gmail.com', age: 11}).not.HaveValidProfile();
    expect(() => expect(10).HaveValidProfile()).toThrow("Please enter an object");
    expect(() => expect([]).HaveValidProfile()).toThrow("Please enter an object");
    expect(() => expect('seif').HaveValidProfile()).toThrow("Please enter an object");
})
