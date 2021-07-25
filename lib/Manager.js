const Employee = require('../lib/Employee.js')

class Manager extends Employee{
    constructor (name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber
    }
    

    getOfficeNumber(officeNumber){
        this.officeNumber = officeNumber;
        return officeNumber;
    }
    
    getRole(){
        return Manager;
    }
    
}

module.exports = Manager;