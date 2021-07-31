//Required file for the test
const Intern = require('../lib/Intern.js')

//Tests to validate object construction and functions within
test('creates an Intern object', () => {
    const intern = new Intern("Logan",2,"logandufek@gmail.com", "Case Western")

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.school).toEqual(expect.any(String))

});

test('gets school same sucessfully', () => {
    const intern = new Intern("Logan",2,"logandufek@gmail.com", "Case Western")

    expect(intern.getSchool()).toEqual(intern.school)

});

test('Intern role returned sucessfully', () => {
    const intern = new Intern("Logan",2,"logandufek@gmail.com", "Case Western")

    expect(intern.getRole()).toEqual(Intern)

});
