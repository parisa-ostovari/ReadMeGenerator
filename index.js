// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer =  require('inquirer');
const path =  require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "How would someone use your project?",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project, from the following list:",
        choices: [
            "None",
            "MIT", 
            "Apache 2.0",  
            "BSD 2-clause Simplified" ,
            "BSD 3-clause New/Revised",
            "GNU GPL",
        ]
    },
    {
        type: "input",
        name: "contributions",
        message: "Who were the contributors to this project",
    },
    {
        type: "input",
        name: "tests",
        message: "How would you test your project?",
    },
    {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    }
];

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
            console.log ("Successfully created README.md file")
        })
}

// Function call to initialize app
init();

