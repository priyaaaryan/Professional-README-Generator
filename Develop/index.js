const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Include packages needed for this application
//Inquirer package is needed

// TODO: Create an array of questions for user input
const question = [{
            type:'input',
            name: 'projectTitle',
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
            type:'list',
            name: 'license',
            message: 'Choose a license for this project',
            choices: ['MIT','GNU','Apache','BSD','EPL', 'ISC']
        },
        {
            type:'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },
        {
            type:'input',
            name: 'email',
            message: 'Enter your email address',
        }
    ];
    

function generateReadMe(data) {
    let markdown = `# ${data.projectTitle}

## License

![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

## Table of Contents 

- [License](#tests)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## How to Contribute
${data.contribution}

## Tests
${data.test}

## Questions
- [Github](https://github.com/${data.github}) 
- For any additional questions you can reach me at [${data.email}](mailto:${data.email})

`;
    return markdown;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
        console.log('Page created! Check out README.md in this directory to see it!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(question)
    .then(answer => {
        let README = generateReadMe(answer)
        writeToFile('./README.md', README)
    });
    
}

// Function call to initialize app
init();