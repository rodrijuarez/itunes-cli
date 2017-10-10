var inquirer = require('inquirer');
inquirer
  .prompt({
    type: 'list',
    message: 'Select an option',
    name: 'Options',
    choices: ['One', 'Two', 'Three']
  })
  .then(function(answers) {
    console.log('answers', answers);
  });
