const Employee = require('../lib/Employee.js')

class Engineer extends Employee{
    constructor (name, id, email, github) {
        super(name, id, email);

        this.github = `https://github.com/${github}`
    }

    getGithub(){
        
        return `https://github.com/${this.github}`;
    }

    getRole(){
        
        return Engineer;
    }
}

module.exports = Engineer;