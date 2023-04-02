// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'myName',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'myGitHub',
      message: 'What is your github username?'
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage instructions:'
    },
    {
      type: 'input',
      name: 'Testing',
      message: 'Describe what testing has been done and by who?'
    },
    {
      type: 'input',
      name: 'Contributors',
      message: 'Are there any additional contributors to give credit to?'
    },
    {
      type: 'input',
      name: 'License',
      message: 'What license is the project released under?'
    },
    {
      type: 'input',
      name: 'Support',
      message: 'How can users get support if they encounter issues or have questions?'
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log(`README file ${fileName} has been created!`);
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const fileName = 'README.md';
        const data = generateMarkdown(answers);
        writeToFile(fileName, data);
      });
  }

// Function call to initialize app
init();