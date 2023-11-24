// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path/posix");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        // takes in user input for project title
        {
            type: "input",
            name: "title",
            message: "What's your project's title?"
        },

        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project"
        },
        {
            // takes in user input for installation defaults to npm i
            type: "input",
            name: "installation",
            message: "What command should be run to install dependencies?",
            default: "npm i"
        },
        // takes in user input for any project usage information

        {
            type: "input",
            name: "usage",
            message: "What should be known to use your project?"
        },

        {
            type: "input",
            name: "contribution",
            message: "What should be known to contribute to your project"
        },
        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project"
        },
        {
            type: "input",
            name: "tests",
            message: "What command should be run to run tests?",
            default: "npm test"
        },

        // takes in user input for their GitHub username
        {
            type: "input",
            name: "username",
            message: "What's your GitHub username?",
        },
        // takes in user input for their email
        {
            type: "input",
            name: "email",
            message: "What's your email?",
        },
        // displays a list of licenses
        // defaults to MIT license
        // user can choose 1 using arrow keys
        {
            type: "list",
            name: "license",
            message: "Choose a license for your project.",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3"],
            default: ["MIT"]
        },
    ]);

}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    questions().then((responses) => { 
        console.log(responses)
        console.log("Creating Professional README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
