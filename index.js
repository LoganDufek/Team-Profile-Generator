//Necessary require methods to access inqurer, fs, and custom classes
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');

//Overall class which is callled at the end in conjunction with promptUser to start the program
class Team {
    constructor() {
        //constructor function with an array for the created employees to later be added to
        this.allEmployees = [];

    }
    //Intro inquirer function for the Manager to fill out
    promptUser() {

        inquirer
            .prompt([{
                type: "text",
                name: 'managerName',
                message: "What is the Manager's name?"
            },
            {
                type: 'number',
                name: 'ID',
                message: "What is their ID number?",
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is their email?"
            },
            {
                type: 'number',
                name: 'officeNumber',
                message: "What is their office number?"
            },

            ])
            //Take and descructure the answers given
            .then(({ managerName, ID, managerEmail, officeNumber }) => {
                // Use the required Manager class defined in another js file and assign those elements to a new variable
                const manager = new Manager(managerName, ID, managerEmail, officeNumber);

                //HTML for the Manager elements that're assigned to a variable
                let buildManager = `<div class="row">
                <div class="card" style="width: 18rem;">
                    <div class="card-header manager-title">
                        <h4>${manager.name}</h4>
                            <h5> 
                                Manager 
                            </h5> 
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <p>
                             ID: ${manager.id}
                            </p>
                        </li>
                    <li class="list-group-item">
                            <p> 
                            Email: 
                            <a href="mailto:${manager.email}">${manager.email}</a>
                            </p>
                    </li>
                    <li class="list-group-item">
                            <p> 
                            Office Number: ${manager.officeNumber} 
                            </p><
                     /li>
                    </ul>
                </div>`
                //The buildManager variable is then pushed into the exisitng allEmployees array
                this.allEmployees.push(buildManager)

                console.log(manager)

            })
            .then(() => {
                //The Manager is then prompted by the addTeamMember function to either add an Engineer, Intern, or finish the function 
                this.addTeamMember();
            })


    }
    //Engineer Question List Function
    engineerQuestions() {
        inquirer
            .prompt([{
                type: 'text',
                name: 'engineerName',
                message: "What is the Engineer's name?"
            },
            {
                type: 'number',
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
            .then(({ engineerName, ID, engineerEmail, github }) => {
                // Use the required Engineer class defined in another js file and assign those elements to a new variable
                const engineer = new Engineer(engineerName, ID, engineerEmail, github);

                //HTML for the Engineer elements that're assigned to a variable
                let buildEngineers = `<div class="row">
                <div class="card" style="width: 18rem;">
                    <div class="card-header engineer-title">
                        <h4>${engineer.name}</h4>
                            <h5> 
                                Engineer 
                            </h5> 
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <p>
                             ID: ${engineer.id}
                            </p>
                        </li>
                    <li class="list-group-item">
                            <p> 
                            Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
                            </p>    
                    </li>
            
                    <li class="list-group-item"> 
                            <p>  
                            GitHub: <a href="https://github.com/${engineer.github}"> ${engineer.github}</a>
                            </p>
                    </li>
                    </ul>
                </div>`
                //The buildEngineer variable is then pushed into the exisitng allEmployees array
                this.allEmployees.push(buildEngineers)
                console.log(engineer)

            })
            .then(() => {
                //The Manager is then prompted by the addTeamMember function to either add an Engineer, Intern, or finish the function 
                this.addTeamMember();
            })
    }
    //Intern Question List Function
    internQuestions() {
        inquirer
            .prompt([{
                type: 'text',
                name: 'internName',
                message: "What is the Intern's name?"
            },
            {
                type: 'number',
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
            .then(({ internName, ID, internEmail, school }) => {
                // Use the required Intern class defined in another js file and assign those elements to a new variable
                const intern = new Intern(internName, ID, internEmail, school);

                //HTML for the Intern elements that're assigned to a variable
                let buildIntern = `<div class="row">
                <div class="card" style="width: 18rem;">
                    <div class="card-header intern-title">
                        <h4>${intern.name}</h4>
                            <h5> 
                                Intern 
                            </h5> 
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <p>
                             ID: ${intern.id}
                            </p>
                        </li>
                    <li class="list-group-item">
                            <p> 
                            Email: 
                            <a href="mailto:${intern.email}">${intern.email}</a>
                            </p>
                    </li>
                    <li class="list-group-item">
                            <p> 
                            School: ${intern.school} 
                            </p><
                     /li>
                    </ul>
                </div>`
                //The buildIntern variable is then pushed into the exisitng allEmployees array
                this.allEmployees.push(buildIntern)

                console.log(intern)

            })
            .then(() => {
                //The Manager is then prompted by the addTeamMember function to either add an Engineer, Intern, or finish the function 
                this.addTeamMember();
            })

    }
    //add Team Member function that is called after every election
    addTeamMember() {
        inquirer
            .prompt([{
                type: 'list',
                name: 'addTeamMembers',
                message: 'Would you like to add a Team Member or Finish Building your Team Profile?',
                choices: ['Add Engineer', 'Add Intern', 'Finish']
            }])
            //addTeamMembers is destructured and then a different function is called depending on the answer 
            .then(({ addTeamMembers }) => {
                if (addTeamMembers === "Add Engineer") {
                    console.log("Engineer Selected")

                    this.engineerQuestions();
                }
                else if (addTeamMembers === "Add Intern") {
                    console.log("Intern Selected")

                    this.internQuestions();
                }
                else if (addTeamMembers === "Finish") {
                    console.log("Building Page!")

                    this.buildHTML();
                }
            })

    }

    //Function to generate the HTML once all the employees have been added
    buildHTML() {

        //allEmployees array are then formatted appropriately so they appear as their own entity on the page
        const organizedArray = this.allEmployees.join(' ');

        var employeeData =
            `<!DOCTYPE html>
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
                <p>My Fantastic Team</p>
          </div>

          <div class="container-fluid">
          <div class="row">
                ${organizedArray}
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

}

new Team().promptUser();

