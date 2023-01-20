const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

console.log('Starting');

inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: function(email)
        {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'What is your project description?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: [
            'MIT License',
            'Apache License',
            'GPL License',
            'BSD License',
            'GNU License',
            'None'
        ]
    },
    {
        type: 'checkbox',
        name: 'installation',
        message: 'What needs to be installed to run your project?',
        choices: [
            'Chrome Browser',
            'Visual Code Studio',
            'Node.js',
            'Express.js',
            'MongoDB',
            'MySQL',
            'Git',
            'Gitlab'
        ]
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions of how to use your project.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list any collaborators of your project.'
    },
    {
        type: 'input',
        name: 'tests', 
        message: 'Please provide instructions on how to run tests.'
    },
]).then(data => {
    console.log(data);
    const markdown = `
# ${data.projectName}

## Description

${data.projectDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

You'll need the below installed in order for the ${data.projectName} to work:

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

This application is covered by the ${data.license}.

---

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## How to Contribute

If you would like to contribute to this project, you can follow the steps below:
1. **Create** a personal fork of the project on Github.
2. **Clone** the fork on your local machine.
3. **Commit** the changes to your own branch.
4. **Push** the branch to your fork on Github of  this project.
5. **Submit** the pull request for the project owner to review the changes

## Tests

${data.tests}

## Questions?
- Project owner: ${data.name}
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;

const filename = `${data.projectName.toLowerCase().split(' ').join('')}.md`;
    fs.writeFile(filename, (markdown), (err) =>
    err? console.log(err) : console.log('Your README is created successfully!')
    );
  })

