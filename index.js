// Adding all required modules
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateReadMe = require('./Utils/generateReadMe');

// Using promises to write file
const writeFileAsync = util.promisify(fs.writeFile);

//Array of questions that the user ahs to fill in to populate the README file
const promptUser = () => {
    return inquirer.prompt([
        {
    type: 'input',
    name: 'Title',
    message: 'What is the name of your project?'
},

{
    type: 'input',
    name: 'Description',
    message: 'Write a description of your project'
},

{
    type: 'input',
    name: 'Installation',
    message: 'Describe the installation process'
},

{
    type: 'input',
    name: 'Usage',
    message: 'What is this application used for?'
},

{
    type: 'input',
    name: 'Contributing',
    message: 'How does the user contribute?'
},

{
    type: 'list',
    name: 'License',
    message: 'Choose the appropriate license from the list:',
    choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
    ]
},
{
    type: 'input',
    name:  'Tests',
    message: 'Does the user need to run any tests?',
},
{
    type: 'input',
    name: 'Username',
    message: 'What is your github username?',
},
{
    type: 'input',
    name: 'Email',
    message: 'What is your email address?',
},
    ]);
}

 
const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('./new/README.md', generateReadMe(answers)))
      .then(() => console.log('Successfully generated README.md'))
      .catch((err) => console.error(err));
  };
  
  init();

