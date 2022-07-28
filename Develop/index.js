const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Include packages needed for this application
//Inquirer package is needed

// TODO: Create an array of questions for user input
const question = [{
            type:'input',
            name: 'project title',
            message: 'What is your project title ?',
        },        
        {
            type:'input',
            name: 'description',
            message: 'What is your project description?',
        }, 
        {
            type:'input',
            name: 'installation',
            message: 'Enter project installation instructions',
        }, 
        {
            type:'input',
            name: 'usage',
            message: 'How to use the project?',
        }, 
        {
            type:'input',
            name: 'contribution',
            message: 'Enter contribution guidelines',
        },   
        {
            type:'input',
            name: 'test',
            message:'Enter Testing Instructions',
        },
        {
            type:'checkbox',
            name: 'license',
            message: 'Choose a license for this project',
            choices: ['MIT','GNU','APACHE 2.0','BSD','EPL']
        },
        {
            type:'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },
        {
            type:'input',
            name: 'email address',
            message: 'Enter your email address',
        }
    ];
         

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data.toString(), err => {
        if (err) throw new Error(err);
        console.log('Page created! Check out README.md in this directory to see it!');
    });
}

// TODO: Create a function to initialize app
function init() {
    let data = {};
    inquirer.prompt(question).then(answer => data = answer);
    writeToFile('./README.md', data);
}

// Function call to initialize app
init();