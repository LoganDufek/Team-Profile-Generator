//Required file for the test
const Engineer = require('../lib/Engineer.js')

//Tests to validate object construction and functions within
test('creates an Enginner object', () => {
    const engineer = new Engineer("Logan",2,"logandufek@gmail.com", "LoganDufek")

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String))
    expect(engineer.github).toEqual(expect.any(String))

});

test('grabs Github link sucessfully', () => {
    const engineer = new Engineer("Logan",2,"logandufek@gmail.com", "LoganDufek")

    expect(engineer.getGithub()).toEqual(`https://github.com/${engineer.github}`)

})

test('Enginner role returned sucessfully', () => {
    const engineer = new Engineer("Logan",2,"logandufek@gmail.com", "LoganDufek")

    expect(engineer.getRole()).toEqual(Engineer)

})