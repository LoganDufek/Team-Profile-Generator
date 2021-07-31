//Imported Employee Class
const Employee = require('../lib/Employee.js')

//Class and constructor function, Intern class extends Employee class
class Intern extends Employee{
    constructor (name, id, email, school) {
        super(name, id, email);

        this.school = school
    };
     //Class methods
    getSchool() {
        return this.school
    };

    getRole(){
        return Intern;
    };
};

//Export the class so it can be used in another file
module.exports = Intern;