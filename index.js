// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"Enter Project Title"
    },
    {
        type:"input",
        name:"description",
        message:"Enter Project Description"
    },
    {
        type:"input",
        name:"installation",
        message:"Enter Project Installation"
    },
    {
        type:"input",
        name:"usage",
        message:"Enter Project Usage"
    },
    {
        type:"list",
        name:"license",
        message:"Enter Project License",
        choices:["MIT","ISC","GPL","APACHE","None"]
    },
    {
        type:"input",
        name:"contributing",
        message:"Enter Project Contributing"
    },
    {
        type:"input",
        name:"tests",
        message:"Enter Project Testing requirements"
    },
    {
        type:"input",
        name:"questions",
        message:"Enter EmailId"
    },
    {
        type:"input",
        name:"github",
        message:"Enter Project Github username"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(response){
      return  generateMarkdown(response)
    }).then(function(readmecontent){
        writeToFile("README.md", readmecontent)
    })
}

// Function call to initialize app
init();
