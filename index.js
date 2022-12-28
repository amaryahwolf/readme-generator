// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your project:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the whay, why, and how of your project. Use the following questions as a guide:\nWhat was your motivation?\nWhy did you build this project?\nWhat problem does it solve?\nWhat did you learn?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter instructions and examples for use:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter the file path for a screenshot of your project:',
        name: 'screenshot',
    },
    {
        type: 'input',
        message: 'List your collaborators, any third-party assets, and/or tutorials followed, if any:',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Which license did you use?',
        choices: ['MIT', 'GPLv2', 'Apache', 'None'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Enter your contribution guidelines:',
        name: 'contributing',
    },
    { 
        type: 'input',
        message: 'Enter your test guidelines:',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter your github username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email:',
        name: 'email',
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) throw err 
        console.log("Input received!")
    }
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt (questions)
    .then((response)=> {
        const filename = `${response.title.toLowerCase().split(' ').join('')}.md`;
        writeToFile(filename, generateMarkdown(response))
    }
    )
}

// Function call to initialize app
init();
