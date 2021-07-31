//Imported Employee Class
const Employee = require('../lib/Employee.js')

//Class and constructor function, Engineer class extends Employee class
class Engineer extends Employee{
    constructor (name, id, email, github) {
        super(name, id, email);

        this.github = github
    }
    //Class methods
    getGithub(){
        
        return `https://github.com/${this.github}`;
    }

    getRole(){
        
        return Engineer;
    }
}

//Export the class so it can be used in another file
module.exports = Engineer;