//Class and constructor function 
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //Class methods
    getName(){
            return this.name
    }

    getID(){
            return this.id
    }
    getEmail(){
            return this.email
    }

    getRole(){
        return Employee
    }
}

//Export the class so it can be used in another file
module.exports = Employee;