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
        message: 'What '
    }
    
]).then(data => {
    console.log(data);
    const markdown = `
# ${data.projectName}

## Description

An in-depth paragraph about your project and overview of use.

## Getting Started

### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders
* 
## Questions?

- GitHub: [${data.github}](https://github.com/${data.github}/)
- Email: ${data.email}
`;

const filename = `${data.projectName.toLowerCase().split(' ').join('')}.md`;
    fs.writeFile(filename, (markdown), (err) =>
    err? console.log(err) : console.log('Your README is created successfully!')
    );
  })

