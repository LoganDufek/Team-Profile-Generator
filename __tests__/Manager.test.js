//Required file for the test
const Manager = require('../lib/Manager.js')

//Tests to validate object construction and functions within
test('creates a Manager object', () => {
    const manager = new Manager("Logan", 2,"logandufek@gmail.com", 5)

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

});

test('checks that the ID from Manager object has been sucessfully chosen', () => {
    const manager = new Manager("Logan", 2,"logandufek@gmail.com", 5)

    expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);

});

test('checks that the Manager has been sucessfully returned', () => {
    const manager = new Manager("Logan", 2,"logandufek@gmail.com", 5)

    expect(manager.getRole()).toEqual(Manager);

});