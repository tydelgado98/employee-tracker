const DB = require('../db/DB');

const questions = [
    {
        type: 'list',
        name: 'task',
        message: 'Would you like to see',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    },
    {
        type: 'input',
        name: 'name',
        message: 'what is the departments name?',
        when: ({task})=> task === "add a department" 
    },
    {
        type: 'input',
        name: 'title',
        message: 'what is the role name?',
        when: ({task})=> task === "add a role" 
    },
    {
        type: 'input',
        name: 'salary',
        message: 'what is the salary?',
        when: ({task})=> task === "add a role" 
    },
    {
        type: 'list',
        name: 'department_id',
        message: 'what is the department?',
        choices: DB.listDepts,
        when: ({task})=> task === "add a role" 
    },
    // {
    //     type: 'input',
    //     name: 'name',
    //     message: 'what is the employees name?',
    //     when: ({task})=> task === "add an employee" 
    // }
];

module.exports = questions;