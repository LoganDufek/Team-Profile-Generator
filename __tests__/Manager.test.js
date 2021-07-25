
const Manager = require('../lib/Manager.js')

test('creates a Manager object', () => {
    const manager = new Manager("Logan", 2,"logandufek@gmail.com", 5)

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

});

test('checks that the name from Manager object has been sucessfully chosen', () => {
    const manager = new Manager("Logan", 2,"logandufek@gmail.com", 5)

    expect(manager.getName()).toEqual(manager.name);

});

test('checks that the ID from Manager object has been sucessfully chosen', () => {
    const manager = new Manager("Logan", 2,"logandufek@gmail.com", 5)

    expect(manager.getID()).toEqual(manager.id);

});

test('checks that the Email from Manager object has been sucessfully chosen', () => {
    const manager = new Manager("Logan", 2,"logandufek@gmail.com", 5)

    expect(manager.getEmail()).toEqual(manager.email);

});

test('checks that the ID from Manager object has been sucessfully chosen', () => {
    const manager = new Manager("Logan", 2,"logandufek@gmail.com", 5)

    expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);

});

test('checks that the Manager has been sucessfully returned', () => {
    const manager = new Manager("Logan", 2,"logandufek@gmail.com", 5)

    expect(manager.getRole()).toEqual(Manager);

});