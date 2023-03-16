const db = require('./connections');
cTable = require('console.table');

class DB {
    constructor(db, log) {
        this.db = db;
        this.log = log;
    }

    addDep = ({ name }) => this.db.promise().query(`INSERT INTO department SET ?`, { name });
    addEmp = ({ name }) => this.db.promise().query(`INSERT INTO employee SET ?`, { name });
    getDepartments = () => this.db.promise().query('SELECT * from department;').then(([data]) => console.table(data));
    getRoles = () => this.db.promise().query('SELECT * from role;').then(([data]) => console.table(data));
    getEmps = () => this.db.promise().query(`
        SELECT 
            e.id,
            e.first_name,
            e.last_name,
            r.title,
            r.salary,
            CONCAT(e2.first_name," ",e2.last_name) manager
        FROM employee e
        JOIN role r 
        ON e.role_id = r.id
        JOIN employee e2
        ON e.manager_id = e2.id;`
    ).then(([data]) => console.table(data));

    listDepts = () => this.db.promise().query('SELECT name, id as value FROM department;').then(([data]) => console.table(data));
    addRole = ({ title,salary,department_id }) => this.db.promise().query(`INSERT INTO role SET ?`, { title,salary,department_id });

};

module.exports = new DB(db);