// Include packages needed for this application
const { writeFile } = require('fs/promises');
const { prompt } = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of this project?',
        validate: projectName => {
            if (projectName) {
                return true;
            } else {
                console.log('Please enter a name for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Give a description of your project: ',
        validate: projectDescription => {
            if (projectDescription) {
                return true;
            } else {
                console.log('Please enter a description for your project!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'projectLanguages',
        message: 'What technologies did you use to create this project?',
        choices: [
            "HTML ",
            "CSS ",
            "JavaScript ",
            "BootStrap ",
            "Materialize ",
            "Tailwind ",
            "Jquery ",
            "Node ",
            "React ",
            "Angular ",
            "MySQL "
        ],
        validate: projectLanguages => {
            if (projectLanguages) {
                return true;
            } else {
                console.log('Please select all languages you used to create this project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectInstall',
        message: 'What are the installation instructions?',
        validate: projectInstall => {
            if (projectInstall) {
                return true;
            } else {
                console.log('Please Give the user installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectUse',
        message: 'How does the user Use your project?'
    },
    {
        type: 'list',
        name: 'projectLicense',
        message: 'What license are you using for your project?',
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause 'Simplified' License",
            "BSD 3-Clause 'New' or 'Revised' License",
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense"
        ],
        validate: projectLicense => {
            if (projectLicense) {
                return true;
            } else {
                console.log('Please choose a license. If you do not want a license, select "The Unlicense" to dedicate the work to public domain');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectContribution',
        message: 'What are your rules for contributing to this project?'
    },
    {
        type: 'input',
        name: 'projectTest',
        message: 'Do you run any tests in this project? If so, how can the user run them?'
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your GitHub username?',
        validate: githubName => {
            if (githubName) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email address?',
        validate: userEmail => {
            if (userEmail) {
                return true;
            } else {
                console.log('Please enter your username');
                return false;
            }
        }
    }
];

// Create a function to write README file
function writeToFile (fileName, data) {
    writeFile(fileName, data);
}

// Create a function to initialize app
async function init () {
    const answers = await prompt(questions);
    const projectInfo = await generateMarkdown(answers);
    await writeToFile('README.md', projectInfo);
}

// Function call to initialize app
init();