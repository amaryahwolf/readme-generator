// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
        message: "Enter the title of your project: ",
        name: "title",
    }
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
        writeToFile("README.md", generateMarkdown(response))
    // generateMarkdown
        console.log(response)
    }
    )
}

// Function call to initialize app
init();
