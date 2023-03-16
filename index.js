const db = require('./db/connections');
const { prompt } = require("inquirer");
const cTable = require('console.table');
const mysql = require('mysql2');
const { questions } = require('./lib');
const DB = require('./db/DB');

const init = () =>
  prompt(questions)
    .then(ans => {
      let {task} = ans;

      if (task == 'view all departments') DB.getDepartments().then(init);
      if (task == 'view all roles') DB.getRoles().then(init);
      if (task == 'view all employees') DB.getEmps().then(init);
      if (task == 'add a department') DB.addDep(ans).then(init);
      if (task == 'add a role') DB.addRole(ans).then(init);
    });

init();



 



