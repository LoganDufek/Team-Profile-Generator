const inquirer = require('inquirer');
const fs = require('fs');
// const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
let i = 0;

class Team {
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
    .then(({ managerName, ID, managerEmail, officeNumber}) => {
      
       const manager = new Manager(managerName, ID, managerEmail, officeNumber);

       let buildManager = `<div class="card" style="width: 18rem;">
       <div class="card-header title" ><h4> ${manager.name}</h4>
       <h5> Manager </h5> </div>
       <ul class="list-group list-group-flush">
       <li class="list-group-item"><p> ID: ${manager.id} </p></li>
       <li class="list-group-item"><p> Email: <a href="mailto:${manager.email}">${manager.email}</a>
       </p></li>
       
       <li class="list-group-item"> <p> Office Number: ${manager.officeNumber} </p></li>
       </ul>
       </div>`
       this.allEmployees.push(buildManager)
   

       console.log(manager)

       
    
        
        
    //     console.log(this.allEmployees)
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
             const engineer = new Engineer(engineerName, ID, engineerEmail, github);
    
            // let engineers = {
            //     name: engineer.getName(),
            //     id: engineer.getID()
            // }
            
            let buildEngineers = `<div class="card" style="width: 18rem;">
            <div class="card-header title"> <h4> ${engineer.name}</h4>
            <h5> Engineer </h5> </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item"><p> ID: ${engineer.id} </p></li>
            <li class="list-group-item"><p> Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
            </p></li>
            
            <li class="list-group-item"> <p>  GitHub: <a href="https://github.com/${engineer.github}"> ${engineer.github}</a></p></li>
            </ul>
            </div>`
            
            this.allEmployees.push(buildEngineers)
            // console.log(this.allEmployees)
    
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
    .then(({ internName, ID, internEmail, school}) => {
         const intern = new Intern(internName, ID, internEmail, school);

         
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

            this.internQuestions();
        }
        else if (addTeamMembers === "Finish"){
            console.log("Building Page!")

            this.buildHTML();
        }
    })
    
}     

buildHTML(){
    
      
 const singleitem = this.allEmployees.join(' ');
    
        var employeeData =  `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Builder</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css">
            <link rel="stylesheet" href="../src/style.css">
        </head>
          <body>
          <div class="header col 12">
                My Team
          </div>

          <div class="container-fluid">
          <div class="row">
          ${singleitem}
          </div>
          </div>
          </body>
            
        </html>`

        fs.writeFile('./dist/TeamProfile.html', employeeData, err => {
            if (err) {
                throw (err);

            }
            console.log('File created!')
        })
    

}
// generatepage(){
//     `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
//     <body>
//     ${this.allEmployees.Manager}
        
//     </body>
//     </html>`
// }
}



new Team().promptUser();

