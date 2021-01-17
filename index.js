// Packages included for the application
const fs = require('fs');
const inquirer = require('inquirer');
const writeChoices = require('./utils/generateMarkdown');


// Object array of questions that will be prompted to the users
const questions = [{

    type: "input",
    name: "title",
    message: "What is the title for the project?",
    
},
{
    type: "input",
    name: "description",
    message: "Please write a short description of your project",
    
},
{
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
},
{
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?" 
},
{
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
},
{
    type: "input",
    name: "github",
    message: "What is your Github username?",
},
{
    type: "input",
    name: "email",
    message: "What is your email address?",
},
{
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"],
},
{
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
},
];

// This function writes the README file
function generateREADme(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

// This function initialize the application
function init() {
    data ="";
    inquirer.prompt(questions).then((response) => {
        console.log('Generating README...');
        generateREADme('README.md', writeChoices({...response}));
    })
}


// Function call to initialize app
init();
