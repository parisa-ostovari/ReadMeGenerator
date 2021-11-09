// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer =  require('inquirer');
const path =  require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the program?",
    name: "title"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            // console.log(answers.title)
            writeToFile('README.md', generateMarkdown({...answers}))
        })
}

// Function call to initialize app
init();

