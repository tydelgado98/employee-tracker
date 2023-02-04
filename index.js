const db = require('./db/connections');
const inquirer = require("inquirer");
const { default: Choices } = require('inquirer/lib/objects/choices');
// const cTable = require('console.table');


inquirer
  .prompt([
    {
      type: 'confirm',
      name: 'department_id',
      message: 'dapart:',
   
    }
  ])
  .then(answers => {
    db.promise()
      .query(`SELECT * FROM department = ${answers.department_id}`)
      .then(data => console.table(data[0]));
  });

  
  // inquirer
  //   .prompt([
  //     {
  //       type: "list",
  //       name: "viewDepartments",
  //       message: "What would you like to do?",
  //       choices: ["View all departments", "Exit"],
  //     },
  //   ])
  //   .then((answers) => {
  //     if (answers.viewDepartments === "View all departments") {
  //       // Execute the SQL query to retrieve all departments from the "department" table
  //       // ...
  
  //       console.log("All departments:", departments);
  //     } else {
  //       console.log("Exiting...");
  //     }
  //   });
  