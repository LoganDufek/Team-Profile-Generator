//Imported Employee Class
const Employee = require('../lib/Employee.js')

//Class and constructor function, Manager class extends Employee class
class Manager extends Employee{
    constructor (name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber
    };
    //Class methods
    getOfficeNumber(){
        
        return this.officeNumber;
    };
    
    getRole(){
        return Manager;
    };
    
};

//Export the class so it can be used in another file
module.exports = Manager;