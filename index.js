const db = require('./db/connections');
const inquirer = require("inquirer");
const { default: Choices } = require('inquirer/lib/objects/choices');
// const cTable = require('console.table');
const mysql = require('mysql2');


inquirer
.prompt([
{
type: 'confirm',
name: 'seeDepartmentData',
message: 'Would you like to get started'
},
{
type: 'confirm',
name: 'department_id',
message: 'Departments/Ids',
when: answers => answers.seeDepartmentData === true
}
])
.then(answers => {
  if (answers.seeDepartmentData === true) {
    db.promise()
    .query(`SELECT * FROM department`)
    .then(data => console.table(data))
    .catch(err => console.error(err));
  } else {
    console.log("No department data will be shown.");
  }
});

  
  