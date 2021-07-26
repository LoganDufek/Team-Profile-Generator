const inquirer = require('inquirer');
const fs = require('fs');
// const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');

class BuildHTML {
    constructor(){
        this.allEmployees = [];

}

promptUser() {

    inquirer
    .prompt([{
        type: 'text',
        name: 'managerName',
        message: "What is the Manager's name?"
    },
    {
        type: 'text',
        name: 'ID',
        message: "What is their ID number?" 
    },
    {
        type: 'text',
        name: 'managerEmail',
        message: "What is their email?"  
    },
    {
        type: 'text',
        name: 'officeNumber',
        message: "What is their office number?"  
    },

    ])
    .then(({ managerName, ID, managerEmail, officeNumber, addTeamMembers}) => {
       const employee = new Manager(managerName, ID, managerEmail, officeNumber);

        this.allEmployees.push(employee)
        console.log(this.allEmployees)
      })
      .then(() => {
              
        this.addTeamMember();
      })
      

}
engineerQuestions() {
inquirer
        .prompt([{
            type: 'text',
            name: 'engineerName',
            message: "What is the Engineer's name?"
        },
        {
            type: 'text',
            name: 'ID',
            message: "What is their ID number?" 
        },
        {
            type: 'text',
            name: 'engineerEmail',
            message: "What is their email?"  
        },
        {
            type: 'text',
            name: 'github',
            message: "What is their GitHub username?"  
        }
    
        ])
        .then(({ engineerName, ID, engineerEmail, github}) => {
             const employee = new Engineer(engineerName, ID, engineerEmail, github);
    
            this.allEmployees.push(employee)
           
            console.log(this.allEmployees)
    
          })
          .then(() => {

            this.addTeamMember();
          })
        }
internQuestions(){
    inquirer
    .prompt([{
        type: 'text',
        name: 'internName',
        message: "What is the Intern's name?"
    },
    {
        type: 'text',
        name: 'ID',
        message: "What is their ID number?" 
    },
    {
        type: 'text',
        name: 'internEmail',
        message: "What is their email?"  
    },
    {
        type: 'text',
        name: 'school',
        message: "What University/College are they currently attending?"  
    }

    ])
    .then(({ engineerName, ID, engineerEmail, school}) => {
         const intern = new Intern(engineerName, ID, engineerEmail, school);

        this.allEmployees.push(intern)
       
        console.log(this.allEmployees)

      })
      .then(() => {

        this.addTeamMember();
      })

}

addTeamMember(){
    inquirer
        .prompt([{
        type: 'list',
        name: 'addTeamMembers',
        message: 'Would you like to add a Team Member or FinisBuilding your Team Profile?',
        choices: ['Add Engineer', 'Add Intern', 'Finish']
    }])
    .then(({addTeamMembers}) => {
        if (addTeamMembers === "Add Engineer"){
            console.log("Engineer Selected")
    
            this.engineerQuestions();
                }
        else if (addTeamMembers === "Add Intern"){
            console.log("Intern Selected")

            this.internQuestions()
        }
    })
    
}       
}



new BuildHTML().promptUser();

