//Required file for the test
const Employee = require('../lib/Employee.js')

//Tests to validate object construction and functions within
test('creates an employee object', () => {
    const employee = new Employee("Logan",2,"logandufek@gmail.com")

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String))

});

test('checks that the name from Employee object has been sucessfully chosen', () => {
    const employee = new Employee("Logan", 2,"logandufek@gmail.com")

    expect(employee.getName()).toEqual(employee.name);

});

test('checks that the ID from Employee object has been sucessfully chosen', () => {
    const employee = new Employee("Logan", 2,"logandufek@gmail.com")

    expect(employee.getID()).toEqual(employee.id);

});

test('checks that the Email from Employee object has been sucessfully chosen', () => {
    const employee = new Employee("Logan", 2,"logandufek@gmail.com")

    expect(employee.getEmail()).toEqual(employee.email);

});

test('checks that the Employee has been sucessfully returned', () => {
    const employee = new Employee("Logan", 2,"logandufek@gmail.com")

    expect(employee.getRole()).toEqual(Employee);

});
